"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const snabbdom_1 = require("../snabbdom");
const style_1 = require("../modules/style");
var patch = snabbdom_1.init([
    style_1.default
]);
const h_1 = require("../h");
const tovnode_1 = require("../tovnode");
describe('style', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = document.createElement('div');
        vnode0 = elm;
    });
    it('is being styled', function () {
        elm = patch(vnode0, h_1.default('div', { style: { fontSize: '12px' } })).elm;
        assert_1.default.equal(elm.style.fontSize, '12px');
    });
    it('can be memoized', function () {
        var cachedStyles = { fontSize: '14px', display: 'inline' };
        var vnode1 = h_1.default('i', { style: cachedStyles });
        var vnode2 = h_1.default('i', { style: cachedStyles });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.style.fontSize, '14px');
        assert_1.default.equal(elm.style.display, 'inline');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.style.fontSize, '14px');
        assert_1.default.equal(elm.style.display, 'inline');
    });
    it('updates styles', function () {
        var vnode1 = h_1.default('i', { style: { fontSize: '14px', display: 'inline' } });
        var vnode2 = h_1.default('i', { style: { fontSize: '12px', display: 'block' } });
        var vnode3 = h_1.default('i', { style: { fontSize: '10px', display: 'block' } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.style.fontSize, '14px');
        assert_1.default.equal(elm.style.display, 'inline');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.style.fontSize, '12px');
        assert_1.default.equal(elm.style.display, 'block');
        elm = patch(vnode2, vnode3).elm;
        assert_1.default.equal(elm.style.fontSize, '10px');
        assert_1.default.equal(elm.style.display, 'block');
    });
    it('explicialy removes styles', function () {
        var vnode1 = h_1.default('i', { style: { fontSize: '14px' } });
        var vnode2 = h_1.default('i', { style: { fontSize: '' } });
        var vnode3 = h_1.default('i', { style: { fontSize: '10px' } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.style.fontSize, '14px');
        patch(vnode1, vnode2);
        assert_1.default.equal(elm.style.fontSize, '');
        patch(vnode2, vnode3);
        assert_1.default.equal(elm.style.fontSize, '10px');
    });
    it('implicially removes styles from element', function () {
        var vnode1 = h_1.default('div', [h_1.default('i', { style: { fontSize: '14px' } })]);
        var vnode2 = h_1.default('div', [h_1.default('i')]);
        var vnode3 = h_1.default('div', [h_1.default('i', { style: { fontSize: '10px' } })]);
        patch(vnode0, vnode1);
        assert_1.default.equal(elm.firstChild.style.fontSize, '14px');
        patch(vnode1, vnode2);
        assert_1.default.equal(elm.firstChild.style.fontSize, '');
        patch(vnode2, vnode3);
        assert_1.default.equal(elm.firstChild.style.fontSize, '10px');
    });
    it('updates css variables', function () {
        var vnode1 = h_1.default('div', { style: { '--myVar': 1 } });
        var vnode2 = h_1.default('div', { style: { '--myVar': 2 } });
        var vnode3 = h_1.default('div', { style: { '--myVar': 3 } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.style.getPropertyValue('--myVar'), 1);
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.style.getPropertyValue('--myVar'), 2);
        elm = patch(vnode2, vnode3).elm;
        assert_1.default.equal(elm.style.getPropertyValue('--myVar'), 3);
    });
    it('explicialy removes css variables', function () {
        var vnode1 = h_1.default('i', { style: { '--myVar': 1 } });
        var vnode2 = h_1.default('i', { style: { '--myVar': '' } });
        var vnode3 = h_1.default('i', { style: { '--myVar': 2 } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.style.getPropertyValue('--myVar'), 1);
        patch(vnode1, vnode2);
        assert_1.default.equal(elm.style.getPropertyValue('--myVar'), '');
        patch(vnode2, vnode3);
        assert_1.default.equal(elm.style.getPropertyValue('--myVar'), 2);
    });
    it('implicially removes css variables from element', function () {
        var vnode1 = h_1.default('div', [h_1.default('i', { style: { '--myVar': 1 } })]);
        var vnode2 = h_1.default('div', [h_1.default('i')]);
        var vnode3 = h_1.default('div', [h_1.default('i', { style: { '--myVar': 2 } })]);
        patch(vnode0, vnode1);
        assert_1.default.equal(elm.firstChild.style.getPropertyValue('--myVar'), 1);
        patch(vnode1, vnode2);
        assert_1.default.equal(elm.firstChild.style.getPropertyValue('--myVar'), '');
        patch(vnode2, vnode3);
        assert_1.default.equal(elm.firstChild.style.getPropertyValue('--myVar'), 2);
    });
    it('updates delayed styles in next frame', function (done) {
        var vnode1 = h_1.default('i', { style: { fontSize: '14px', delayed: { fontSize: '16px' } } });
        var vnode2 = h_1.default('i', { style: { fontSize: '18px', delayed: { fontSize: '20px' } } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.style.fontSize, '14px');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                assert_1.default.equal(elm.style.fontSize, '16px');
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.style.fontSize, '18px');
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        assert_1.default.equal(elm.style.fontSize, '20px');
                        done();
                    });
                });
            });
        });
    });
    it('applies tranform as transition on remove', function (done) {
        var btn = h_1.default('button', {
            style: {
                transition: 'transform 0.1s',
                remove: { transform: 'translateY(100%)' }
            }
        }, ['A button']);
        var vnode1 = h_1.default('div.parent', {}, [btn]);
        var vnode2 = h_1.default('div.parent', {}, [null]);
        document.body.appendChild(vnode0);
        patch(vnode0, vnode1);
        patch(vnode1, vnode2);
        const button = document.querySelector('button');
        assert_1.default.notStrictEqual(button, null);
        button.addEventListener('transitionend', function () {
            assert_1.default.strictEqual(document.querySelector('button'), null);
            done();
        });
    });
    describe('using toVNode()', function () {
        it('handles (ignoring) comment nodes', function () {
            var comment = document.createComment('yolo');
            var prevElm = document.createElement('div');
            prevElm.appendChild(comment);
            var nextVNode = h_1.default('div', [h_1.default('span', 'Hi')]);
            elm = patch(tovnode_1.default(prevElm), nextVNode).elm;
            assert_1.default.strictEqual(elm, prevElm);
            assert_1.default.equal(elm.tagName, 'DIV');
            assert_1.default.strictEqual(elm.childNodes.length, 1);
            assert_1.default.strictEqual(elm.childNodes[0].tagName, 'SPAN');
            assert_1.default.strictEqual(elm.childNodes[0].textContent, 'Hi');
        });
    });
});
