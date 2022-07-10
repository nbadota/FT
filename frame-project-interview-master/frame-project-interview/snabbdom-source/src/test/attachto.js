"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const snabbdom_1 = require("../snabbdom");
var patch = snabbdom_1.init([]);
const attachto_1 = require("../helpers/attachto");
const h_1 = require("../h");
describe('attachTo', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = document.createElement('div');
        vnode0 = elm;
    });
    it('adds element to target', function () {
        var vnode1 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                attachto_1.default(elm, h_1.default('div#attached', 'Test')),
            ]),
        ]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.children.length, 2);
    });
    it('updates element at target', function () {
        var vnode1 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                attachto_1.default(elm, h_1.default('div#attached', 'First text')),
            ]),
        ]);
        var vnode2 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                attachto_1.default(elm, h_1.default('div#attached', 'New text')),
            ]),
        ]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.children[0].innerHTML, 'First text');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.children[0].innerHTML, 'New text');
    });
    it('element can be inserted before modal', function () {
        var vnode1 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                attachto_1.default(elm, h_1.default('div#attached', 'Text')),
            ]),
        ]);
        var vnode2 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                h_1.default('div', 'A new element'),
                attachto_1.default(elm, h_1.default('div#attached', 'Text')),
            ]),
        ]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.children[0].innerHTML, 'Text');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.children[0].innerHTML, 'Text');
    });
    it('removes element at target', function () {
        var vnode1 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                attachto_1.default(elm, h_1.default('div#attached', 'First text')),
            ]),
        ]);
        var vnode2 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
            ]),
        ]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.children[0].innerHTML, 'First text');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.children.length, 1);
    });
    it('remove hook receives real element', function () {
        const rm = (vnode, cb) => {
            const elm = vnode.elm;
            assert_1.default.equal(elm.tagName, 'DIV');
            assert_1.default.equal(elm.innerHTML, 'First text');
            cb();
        };
        var vnode1 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
                attachto_1.default(elm, h_1.default('div#attached', { hook: { remove: rm } }, 'First text')),
            ]),
        ]);
        var vnode2 = h_1.default('div', [
            h_1.default('div#wrapper', [
                h_1.default('div', 'Some element'),
            ]),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm = patch(vnode1, vnode2).elm;
    });
});
