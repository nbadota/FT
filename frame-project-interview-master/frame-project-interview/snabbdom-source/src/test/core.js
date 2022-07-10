"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const lodash_shuffle_1 = require("lodash.shuffle");
const snabbdom_1 = require("../snabbdom");
const class_1 = require("../modules/class");
const props_1 = require("../modules/props");
const eventlisteners_1 = require("../modules/eventlisteners");
var patch = snabbdom_1.init([
    class_1.default,
    props_1.default,
    eventlisteners_1.default
]);
const h_1 = require("../h");
const tovnode_1 = require("../tovnode");
const vnode_1 = require("../vnode");
const htmldomapi_1 = require("../htmldomapi");
function prop(name) {
    return function (obj) {
        return obj[name];
    };
}
function map(fn, list) {
    var ret = [];
    for (var i = 0; i < list.length; ++i) {
        ret[i] = fn(list[i]);
    }
    return ret;
}
var inner = prop('innerHTML');
describe('snabbdom', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = document.createElement('div');
        vnode0 = elm;
    });
    describe('hyperscript', function () {
        it('can create vnode with proper tag', function () {
            assert_1.default.equal(h_1.default('div').sel, 'div');
            assert_1.default.equal(h_1.default('a').sel, 'a');
        });
        it('can create vnode with children', function () {
            var vnode = h_1.default('div', [h_1.default('span#hello'), h_1.default('b.world')]);
            assert_1.default.equal(vnode.sel, 'div');
            const children = vnode.children;
            assert_1.default.equal(children[0].sel, 'span#hello');
            assert_1.default.equal(children[1].sel, 'b.world');
        });
        it('can create vnode with one child vnode', function () {
            var vnode = h_1.default('div', h_1.default('span#hello'));
            assert_1.default.equal(vnode.sel, 'div');
            const children = vnode.children;
            assert_1.default.equal(children[0].sel, 'span#hello');
        });
        it('can create vnode with props and one child vnode', function () {
            var vnode = h_1.default('div', {}, h_1.default('span#hello'));
            assert_1.default.equal(vnode.sel, 'div');
            const children = vnode.children;
            assert_1.default.equal(children[0].sel, 'span#hello');
        });
        it('can create vnode with text content', function () {
            var vnode = h_1.default('a', ['I am a string']);
            const children = vnode.children;
            assert_1.default.equal(children[0].text, 'I am a string');
        });
        it('can create vnode with text content in string', function () {
            var vnode = h_1.default('a', 'I am a string');
            assert_1.default.equal(vnode.text, 'I am a string');
        });
        it('can create vnode with props and text content in string', function () {
            var vnode = h_1.default('a', {}, 'I am a string');
            assert_1.default.equal(vnode.text, 'I am a string');
        });
        it('can create vnode with null props', function () {
            var vnode = h_1.default('a', null);
            assert_1.default.deepStrictEqual(vnode.data, {});
            vnode = h_1.default('a', null, ['I am a string']);
            const children = vnode.children;
            assert_1.default.equal(children[0].text, 'I am a string');
        });
        it('can create vnode for comment', function () {
            var vnode = h_1.default('!', 'test');
            assert_1.default.equal(vnode.sel, '!');
            assert_1.default.equal(vnode.text, 'test');
        });
    });
    describe('created element', function () {
        it('has tag', function () {
            elm = patch(vnode0, h_1.default('div')).elm;
            assert_1.default.equal(elm.tagName, 'DIV');
        });
        it('has different tag and id', function () {
            var elm = document.createElement('div');
            vnode0.appendChild(elm);
            var vnode1 = h_1.default('span#id');
            const patched = patch(elm, vnode1).elm;
            assert_1.default.equal(patched.tagName, 'SPAN');
            assert_1.default.equal(patched.id, 'id');
        });
        it('has id', function () {
            elm = patch(vnode0, h_1.default('div', [h_1.default('div#unique')])).elm;
            assert_1.default.equal(elm.firstChild.id, 'unique');
        });
        it('has correct namespace', function () {
            var SVGNamespace = 'http://www.w3.org/2000/svg';
            var XHTMLNamespace = 'http://www.w3.org/1999/xhtml';
            elm = patch(vnode0, h_1.default('div', [h_1.default('div', { ns: SVGNamespace })])).elm;
            assert_1.default.equal(elm.firstChild.namespaceURI, SVGNamespace);
            // verify that svg tag automatically gets svg namespace
            elm = patch(vnode0, h_1.default('svg', [
                h_1.default('foreignObject', [
                    h_1.default('div', ['I am HTML embedded in SVG'])
                ])
            ])).elm;
            assert_1.default.equal(elm.namespaceURI, SVGNamespace);
            assert_1.default.equal(elm.firstChild.namespaceURI, SVGNamespace);
            assert_1.default.equal(elm.firstChild.firstChild.namespaceURI, XHTMLNamespace);
            // verify that svg tag with extra selectors gets svg namespace
            elm = patch(vnode0, h_1.default('svg#some-id')).elm;
            assert_1.default.equal(elm.namespaceURI, SVGNamespace);
            // verify that non-svg tag beginning with 'svg' does NOT get namespace
            elm = patch(vnode0, h_1.default('svg-custom-el')).elm;
            assert_1.default.notEqual(elm.namespaceURI, SVGNamespace);
        });
        it('receives classes in selector', function () {
            elm = patch(vnode0, h_1.default('div', [h_1.default('i.am.a.class')])).elm;
            assert_1.default(elm.firstChild.classList.contains('am'));
            assert_1.default(elm.firstChild.classList.contains('a'));
            assert_1.default(elm.firstChild.classList.contains('class'));
        });
        it('receives classes in class property', function () {
            elm = patch(vnode0, h_1.default('i', { class: { am: true, a: true, class: true, not: false } })).elm;
            assert_1.default(elm.classList.contains('am'));
            assert_1.default(elm.classList.contains('a'));
            assert_1.default(elm.classList.contains('class'));
            assert_1.default(!elm.classList.contains('not'));
        });
        it('receives classes in selector when namespaced', function () {
            elm = patch(vnode0, h_1.default('svg', [
                h_1.default('g.am.a.class.too')
            ])).elm;
            assert_1.default(elm.firstChild.classList.contains('am'));
            assert_1.default(elm.firstChild.classList.contains('a'));
            assert_1.default(elm.firstChild.classList.contains('class'));
        });
        it('receives classes in class property when namespaced', function () {
            elm = patch(vnode0, h_1.default('svg', [
                h_1.default('g', { class: { am: true, a: true, class: true, not: false, too: true } })
            ])).elm;
            assert_1.default(elm.firstChild.classList.contains('am'));
            assert_1.default(elm.firstChild.classList.contains('a'));
            assert_1.default(elm.firstChild.classList.contains('class'));
            assert_1.default(!elm.firstChild.classList.contains('not'));
        });
        it('handles classes from both selector and property', function () {
            elm = patch(vnode0, h_1.default('div', [h_1.default('i.has', { class: { classes: true } })])).elm;
            assert_1.default(elm.firstChild.classList.contains('has'));
            assert_1.default(elm.firstChild.classList.contains('classes'));
        });
        it('can create elements with text content', function () {
            elm = patch(vnode0, h_1.default('div', ['I am a string'])).elm;
            assert_1.default.equal(elm.innerHTML, 'I am a string');
        });
        it('can create elements with span and text content', function () {
            elm = patch(vnode0, h_1.default('a', [h_1.default('span'), 'I am a string'])).elm;
            assert_1.default.equal(elm.childNodes[0].tagName, 'SPAN');
            assert_1.default.equal(elm.childNodes[1].textContent, 'I am a string');
        });
        it('can create elements with props', function () {
            elm = patch(vnode0, h_1.default('a', { props: { src: 'http://localhost/' } })).elm;
            assert_1.default.equal(elm.src, 'http://localhost/');
        });
        it('can create an element created inside an iframe', function (done) {
            // Only run if srcdoc is supported.
            var frame = document.createElement('iframe');
            if (typeof frame.srcdoc !== 'undefined') {
                frame.srcdoc = "<div>Thing 1</div>";
                frame.onload = function () {
                    const div0 = frame.contentDocument.body.querySelector('div');
                    patch(div0, h_1.default('div', 'Thing 2'));
                    const div1 = frame.contentDocument.body.querySelector('div');
                    assert_1.default.equal(div1.textContent, 'Thing 2');
                    frame.remove();
                    done();
                };
                document.body.appendChild(frame);
            }
            else {
                done();
            }
        });
        it('is a patch of the root element', function () {
            var elmWithIdAndClass = document.createElement('div');
            elmWithIdAndClass.id = 'id';
            elmWithIdAndClass.className = 'class';
            var vnode1 = h_1.default('div#id.class', [h_1.default('span', 'Hi')]);
            elm = patch(elmWithIdAndClass, vnode1).elm;
            assert_1.default.strictEqual(elm, elmWithIdAndClass);
            assert_1.default.equal(elm.tagName, 'DIV');
            assert_1.default.equal(elm.id, 'id');
            assert_1.default.equal(elm.className, 'class');
        });
        it('can create comments', function () {
            elm = patch(vnode0, h_1.default('!', 'test')).elm;
            assert_1.default.equal(elm.nodeType, document.COMMENT_NODE);
            assert_1.default.equal(elm.textContent, 'test');
        });
    });
    describe('patching an element', function () {
        it('changes the elements classes', function () {
            var vnode1 = h_1.default('i', { class: { i: true, am: true, horse: true } });
            var vnode2 = h_1.default('i', { class: { i: true, am: true, horse: false } });
            patch(vnode0, vnode1);
            elm = patch(vnode1, vnode2).elm;
            assert_1.default(elm.classList.contains('i'));
            assert_1.default(elm.classList.contains('am'));
            assert_1.default(!elm.classList.contains('horse'));
        });
        it('changes classes in selector', function () {
            var vnode1 = h_1.default('i', { class: { i: true, am: true, horse: true } });
            var vnode2 = h_1.default('i', { class: { i: true, am: true, horse: false } });
            patch(vnode0, vnode1);
            elm = patch(vnode1, vnode2).elm;
            assert_1.default(elm.classList.contains('i'));
            assert_1.default(elm.classList.contains('am'));
            assert_1.default(!elm.classList.contains('horse'));
        });
        it('preserves memoized classes', function () {
            var cachedClass = { i: true, am: true, horse: false };
            var vnode1 = h_1.default('i', { class: cachedClass });
            var vnode2 = h_1.default('i', { class: cachedClass });
            elm = patch(vnode0, vnode1).elm;
            assert_1.default(elm.classList.contains('i'));
            assert_1.default(elm.classList.contains('am'));
            assert_1.default(!elm.classList.contains('horse'));
            elm = patch(vnode1, vnode2).elm;
            assert_1.default(elm.classList.contains('i'));
            assert_1.default(elm.classList.contains('am'));
            assert_1.default(!elm.classList.contains('horse'));
        });
        it('removes missing classes', function () {
            var vnode1 = h_1.default('i', { class: { i: true, am: true, horse: true } });
            var vnode2 = h_1.default('i', { class: { i: true, am: true } });
            patch(vnode0, vnode1);
            elm = patch(vnode1, vnode2).elm;
            assert_1.default(elm.classList.contains('i'));
            assert_1.default(elm.classList.contains('am'));
            assert_1.default(!elm.classList.contains('horse'));
        });
        it('changes an elements props', function () {
            var vnode1 = h_1.default('a', { props: { src: 'http://other/' } });
            var vnode2 = h_1.default('a', { props: { src: 'http://localhost/' } });
            patch(vnode0, vnode1);
            elm = patch(vnode1, vnode2).elm;
            assert_1.default.equal(elm.src, 'http://localhost/');
        });
        it('preserves memoized props', function () {
            var cachedProps = { src: 'http://other/' };
            var vnode1 = h_1.default('a', { props: cachedProps });
            var vnode2 = h_1.default('a', { props: cachedProps });
            elm = patch(vnode0, vnode1).elm;
            assert_1.default.equal(elm.src, 'http://other/');
            elm = patch(vnode1, vnode2).elm;
            assert_1.default.equal(elm.src, 'http://other/');
        });
        it('removes an elements props', function () {
            var vnode1 = h_1.default('a', { props: { src: 'http://other/' } });
            var vnode2 = h_1.default('a');
            patch(vnode0, vnode1);
            patch(vnode1, vnode2);
            assert_1.default.equal(elm.src, undefined);
        });
        describe('using toVNode()', function () {
            it('can remove previous children of the root element', function () {
                var h2 = document.createElement('h2');
                h2.textContent = 'Hello';
                var prevElm = document.createElement('div');
                prevElm.id = 'id';
                prevElm.className = 'class';
                prevElm.appendChild(h2);
                var nextVNode = h_1.default('div#id.class', [h_1.default('span', 'Hi')]);
                elm = patch(tovnode_1.default(prevElm), nextVNode).elm;
                assert_1.default.strictEqual(elm, prevElm);
                assert_1.default.equal(elm.tagName, 'DIV');
                assert_1.default.equal(elm.id, 'id');
                assert_1.default.equal(elm.className, 'class');
                assert_1.default.strictEqual(elm.childNodes.length, 1);
                assert_1.default.strictEqual(elm.childNodes[0].tagName, 'SPAN');
                assert_1.default.strictEqual(elm.childNodes[0].textContent, 'Hi');
            });
            it('can support patching in a DocumentFragment', function () {
                var prevElm = document.createDocumentFragment();
                var nextVNode = vnode_1.default('', {}, [
                    h_1.default('div#id.class', [h_1.default('span', 'Hi')])
                ], undefined, prevElm);
                elm = patch(tovnode_1.default(prevElm), nextVNode).elm;
                assert_1.default.strictEqual(elm, prevElm);
                assert_1.default.equal(elm.nodeType, 11);
                assert_1.default.equal(elm.childNodes.length, 1);
                assert_1.default.equal(elm.childNodes[0].tagName, 'DIV');
                assert_1.default.equal(elm.childNodes[0].id, 'id');
                assert_1.default.equal(elm.childNodes[0].className, 'class');
                assert_1.default.strictEqual(elm.childNodes[0].childNodes.length, 1);
                assert_1.default.strictEqual(elm.childNodes[0].childNodes[0].tagName, 'SPAN');
                assert_1.default.strictEqual(elm.childNodes[0].childNodes[0].textContent, 'Hi');
            });
            it('can remove some children of the root element', function () {
                var h2 = document.createElement('h2');
                h2.textContent = 'Hello';
                var prevElm = document.createElement('div');
                prevElm.id = 'id';
                prevElm.className = 'class';
                var text = new Text('Foobar');
                const reference = {};
                text.testProperty = reference; // ensures we dont recreate the Text Node
                prevElm.appendChild(text);
                prevElm.appendChild(h2);
                var nextVNode = h_1.default('div#id.class', ['Foobar']);
                elm = patch(tovnode_1.default(prevElm), nextVNode).elm;
                assert_1.default.strictEqual(elm, prevElm);
                assert_1.default.equal(elm.tagName, 'DIV');
                assert_1.default.equal(elm.id, 'id');
                assert_1.default.equal(elm.className, 'class');
                assert_1.default.strictEqual(elm.childNodes.length, 1);
                assert_1.default.strictEqual(elm.childNodes[0].nodeType, 3);
                assert_1.default.strictEqual(elm.childNodes[0].wholeText, 'Foobar');
                assert_1.default.strictEqual(elm.childNodes[0].testProperty, reference);
            });
            it('can remove text elements', function () {
                var h2 = document.createElement('h2');
                h2.textContent = 'Hello';
                var prevElm = document.createElement('div');
                prevElm.id = 'id';
                prevElm.className = 'class';
                var text = new Text('Foobar');
                prevElm.appendChild(text);
                prevElm.appendChild(h2);
                var nextVNode = h_1.default('div#id.class', [h_1.default('h2', 'Hello')]);
                elm = patch(tovnode_1.default(prevElm), nextVNode).elm;
                assert_1.default.strictEqual(elm, prevElm);
                assert_1.default.equal(elm.tagName, 'DIV');
                assert_1.default.equal(elm.id, 'id');
                assert_1.default.equal(elm.className, 'class');
                assert_1.default.strictEqual(elm.childNodes.length, 1);
                assert_1.default.strictEqual(elm.childNodes[0].nodeType, 1);
                assert_1.default.strictEqual(elm.childNodes[0].textContent, 'Hello');
            });
            it('can work with domApi', function () {
                var domApi = Object.assign({}, htmldomapi_1.default, {
                    tagName: function (elm) { return 'x-' + elm.tagName.toUpperCase(); }
                });
                var h2 = document.createElement('h2');
                h2.id = 'hx';
                h2.setAttribute('data-env', "xyz");
                var text = document.createTextNode("Foobar");
                var elm = document.createElement('div');
                elm.id = 'id';
                elm.className = 'class other';
                elm.setAttribute('data', 'value');
                elm.appendChild(h2);
                elm.appendChild(text);
                var vnode = tovnode_1.default(elm, domApi);
                assert_1.default.equal(vnode.sel, 'x-div#id.class.other');
                assert_1.default.deepEqual(vnode.data, { attrs: { 'data': 'value' } });
                const children = vnode.children;
                assert_1.default.equal(children[0].sel, 'x-h2#hx');
                assert_1.default.deepEqual(children[0].data, { attrs: { 'data-env': 'xyz' } });
                assert_1.default.equal(children[1].text, 'Foobar');
            });
        });
        describe('updating children with keys', function () {
            function spanNum(n) {
                if (n == null) {
                    return n;
                }
                else if (typeof n === 'string') {
                    return h_1.default('span', {}, n);
                }
                else {
                    return h_1.default('span', { key: n }, n.toString());
                }
            }
            describe('addition of elements', function () {
                it('appends elements', function () {
                    var vnode1 = h_1.default('span', [1].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 2, 3].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 1);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    assert_1.default.equal(elm.children[1].innerHTML, '2');
                    assert_1.default.equal(elm.children[2].innerHTML, '3');
                });
                it('prepends elements', function () {
                    var vnode1 = h_1.default('span', [4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 2);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3', '4', '5']);
                });
                it('add elements in the middle', function () {
                    var vnode1 = h_1.default('span', [1, 2, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    assert_1.default.equal(elm.children.length, 4);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3', '4', '5']);
                });
                it('add elements at begin and end', function () {
                    var vnode1 = h_1.default('span', [2, 3, 4].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3', '4', '5']);
                });
                it('adds children to parent with no children', function () {
                    var vnode1 = h_1.default('span', { key: 'span' });
                    var vnode2 = h_1.default('span', { key: 'span' }, [1, 2, 3].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 0);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3']);
                });
                it('removes all children from parent', function () {
                    var vnode1 = h_1.default('span', { key: 'span' }, [1, 2, 3].map(spanNum));
                    var vnode2 = h_1.default('span', { key: 'span' });
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3']);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 0);
                });
                it('update one child with same key but different sel', function () {
                    var vnode1 = h_1.default('span', { key: 'span' }, [1, 2, 3].map(spanNum));
                    var vnode2 = h_1.default('span', { key: 'span' }, [spanNum(1), h_1.default('i', { key: 2 }, '2'), spanNum(3)]);
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3']);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['1', '2', '3']);
                    assert_1.default.equal(elm.children.length, 3);
                    assert_1.default.equal(elm.children[1].tagName, 'I');
                });
            });
            describe('removal of elements', function () {
                it('removes elements from the beginning', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [3, 4, 5].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 5);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['3', '4', '5']);
                });
                it('removes elements from the end', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 2, 3].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 5);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    assert_1.default.equal(elm.children[0].innerHTML, '1');
                    assert_1.default.equal(elm.children[1].innerHTML, '2');
                    assert_1.default.equal(elm.children[2].innerHTML, '3');
                });
                it('removes elements from the middle', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 2, 4, 5].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 5);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    assert_1.default.deepEqual(elm.children[0].innerHTML, '1');
                    assert_1.default.equal(elm.children[0].innerHTML, '1');
                    assert_1.default.equal(elm.children[1].innerHTML, '2');
                    assert_1.default.equal(elm.children[2].innerHTML, '4');
                    assert_1.default.equal(elm.children[3].innerHTML, '5');
                });
            });
            describe('element reordering', function () {
                it('moves element forward', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4].map(spanNum));
                    var vnode2 = h_1.default('span', [2, 3, 1, 4].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    assert_1.default.equal(elm.children[0].innerHTML, '2');
                    assert_1.default.equal(elm.children[1].innerHTML, '3');
                    assert_1.default.equal(elm.children[2].innerHTML, '1');
                    assert_1.default.equal(elm.children[3].innerHTML, '4');
                });
                it('moves element to end', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3].map(spanNum));
                    var vnode2 = h_1.default('span', [2, 3, 1].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    assert_1.default.equal(elm.children[0].innerHTML, '2');
                    assert_1.default.equal(elm.children[1].innerHTML, '3');
                    assert_1.default.equal(elm.children[2].innerHTML, '1');
                });
                it('moves element backwards', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4].map(spanNum));
                    var vnode2 = h_1.default('span', [1, 4, 2, 3].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    assert_1.default.equal(elm.children[0].innerHTML, '1');
                    assert_1.default.equal(elm.children[1].innerHTML, '4');
                    assert_1.default.equal(elm.children[2].innerHTML, '2');
                    assert_1.default.equal(elm.children[3].innerHTML, '3');
                });
                it('swaps first and last', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4].map(spanNum));
                    var vnode2 = h_1.default('span', [4, 2, 3, 1].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 4);
                    assert_1.default.equal(elm.children[0].innerHTML, '4');
                    assert_1.default.equal(elm.children[1].innerHTML, '2');
                    assert_1.default.equal(elm.children[2].innerHTML, '3');
                    assert_1.default.equal(elm.children[3].innerHTML, '1');
                });
            });
            describe('combinations of additions, removals and reorderings', function () {
                it('move to left and replace', function () {
                    var vnode1 = h_1.default('span', [1, 2, 3, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [4, 1, 2, 3, 6].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 5);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 5);
                    assert_1.default.equal(elm.children[0].innerHTML, '4');
                    assert_1.default.equal(elm.children[1].innerHTML, '1');
                    assert_1.default.equal(elm.children[2].innerHTML, '2');
                    assert_1.default.equal(elm.children[3].innerHTML, '3');
                    assert_1.default.equal(elm.children[4].innerHTML, '6');
                });
                it('moves to left and leaves hole', function () {
                    var vnode1 = h_1.default('span', [1, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [4, 6].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), ['4', '6']);
                });
                it('handles moved and set to undefined element ending at the end', function () {
                    var vnode1 = h_1.default('span', [2, 4, 5].map(spanNum));
                    var vnode2 = h_1.default('span', [4, 5, 3].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.children.length, 3);
                    assert_1.default.equal(elm.children[0].innerHTML, '4');
                    assert_1.default.equal(elm.children[1].innerHTML, '5');
                    assert_1.default.equal(elm.children[2].innerHTML, '3');
                });
                it('moves a key in non-keyed nodes with a size up', function () {
                    var vnode1 = h_1.default('span', [1, 'a', 'b', 'c'].map(spanNum));
                    var vnode2 = h_1.default('span', ['d', 'a', 'b', 'c', 1, 'e'].map(spanNum));
                    elm = patch(vnode0, vnode1).elm;
                    assert_1.default.equal(elm.childNodes.length, 4);
                    assert_1.default.equal(elm.textContent, '1abc');
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.equal(elm.childNodes.length, 6);
                    assert_1.default.equal(elm.textContent, 'dabc1e');
                });
            });
            it('reverses elements', function () {
                var vnode1 = h_1.default('span', [1, 2, 3, 4, 5, 6, 7, 8].map(spanNum));
                var vnode2 = h_1.default('span', [8, 7, 6, 5, 4, 3, 2, 1].map(spanNum));
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.children.length, 8);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['8', '7', '6', '5', '4', '3', '2', '1']);
            });
            it('something', function () {
                var vnode1 = h_1.default('span', [0, 1, 2, 3, 4, 5].map(spanNum));
                var vnode2 = h_1.default('span', [4, 3, 2, 1, 5, 0].map(spanNum));
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.children.length, 6);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['4', '3', '2', '1', '5', '0']);
            });
            it('handles random shuffles', function () {
                var n, i, arr = [], opacities = [], elms = 14, samples = 5;
                function spanNumWithOpacity(n, o) {
                    return h_1.default('span', { key: n, style: { opacity: o } }, n.toString());
                }
                for (n = 0; n < elms; ++n) {
                    arr[n] = n;
                }
                for (n = 0; n < samples; ++n) {
                    var vnode1 = h_1.default('span', arr.map(function (n) {
                        return spanNumWithOpacity(n, '1');
                    }));
                    var shufArr = lodash_shuffle_1.default(arr.slice(0));
                    var elm = document.createElement('div');
                    elm = patch(elm, vnode1).elm;
                    for (i = 0; i < elms; ++i) {
                        assert_1.default.equal(elm.children[i].innerHTML, i.toString());
                        opacities[i] = Math.random().toFixed(5).toString();
                    }
                    var vnode2 = h_1.default('span', arr.map(function (n) {
                        return spanNumWithOpacity(shufArr[n], opacities[n]);
                    }));
                    elm = patch(vnode1, vnode2).elm;
                    for (i = 0; i < elms; ++i) {
                        assert_1.default.equal(elm.children[i].innerHTML, shufArr[i].toString());
                        const opacity = elm.children[i].style.opacity;
                        assert_1.default.equal(opacities[i].indexOf(opacity), 0);
                    }
                }
            });
            it('supports null/undefined children', function () {
                var vnode1 = h_1.default('i', [0, 1, 2, 3, 4, 5].map(spanNum));
                var vnode2 = h_1.default('i', [null, 2, undefined, null, 1, 0, null, 5, 4, null, 3, undefined].map(spanNum));
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.children.length, 6);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['2', '1', '0', '5', '4', '3']);
            });
            it('supports all null/undefined children', function () {
                var vnode1 = h_1.default('i', [0, 1, 2, 3, 4, 5].map(spanNum));
                var vnode2 = h_1.default('i', [null, null, undefined, null, null, undefined]);
                var vnode3 = h_1.default('i', [5, 4, 3, 2, 1, 0].map(spanNum));
                patch(vnode0, vnode1);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.children.length, 0);
                elm = patch(vnode2, vnode3).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['5', '4', '3', '2', '1', '0']);
            });
            it('handles random shuffles with null/undefined children', function () {
                var i, j, r, len, arr, maxArrLen = 15, samples = 5, vnode1 = vnode0, vnode2;
                for (i = 0; i < samples; ++i, vnode1 = vnode2) {
                    len = Math.floor(Math.random() * maxArrLen);
                    arr = [];
                    for (j = 0; j < len; ++j) {
                        if ((r = Math.random()) < 0.5)
                            arr[j] = String(j);
                        else if (r < 0.75)
                            arr[j] = null;
                        else
                            arr[j] = undefined;
                    }
                    lodash_shuffle_1.default(arr);
                    vnode2 = h_1.default('div', arr.map(spanNum));
                    elm = patch(vnode1, vnode2).elm;
                    assert_1.default.deepEqual(map(inner, elm.children), arr.filter(function (x) { return x != null; }));
                }
            });
        });
        describe('updating children without keys', function () {
            it('appends elements', function () {
                var vnode1 = h_1.default('div', [h_1.default('span', 'Hello')]);
                var vnode2 = h_1.default('div', [h_1.default('span', 'Hello'), h_1.default('span', 'World')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['Hello']);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['Hello', 'World']);
            });
            it('handles unmoved text nodes', function () {
                var vnode1 = h_1.default('div', ['Text', h_1.default('span', 'Span')]);
                var vnode2 = h_1.default('div', ['Text', h_1.default('span', 'Span')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text');
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text');
            });
            it('handles changing text children', function () {
                var vnode1 = h_1.default('div', ['Text', h_1.default('span', 'Span')]);
                var vnode2 = h_1.default('div', ['Text2', h_1.default('span', 'Span')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text');
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text2');
            });
            it('handles unmoved comment nodes', function () {
                var vnode1 = h_1.default('div', [h_1.default('!', 'Text'), h_1.default('span', 'Span')]);
                var vnode2 = h_1.default('div', [h_1.default('!', 'Text'), h_1.default('span', 'Span')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text');
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text');
            });
            it('handles changing comment text', function () {
                var vnode1 = h_1.default('div', [h_1.default('!', 'Text'), h_1.default('span', 'Span')]);
                var vnode2 = h_1.default('div', [h_1.default('!', 'Text2'), h_1.default('span', 'Span')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text');
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Text2');
            });
            it('handles changing empty comment', function () {
                var vnode1 = h_1.default('div', [h_1.default('!'), h_1.default('span', 'Span')]);
                var vnode2 = h_1.default('div', [h_1.default('!', 'Test'), h_1.default('span', 'Span')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, '');
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.childNodes[0].textContent, 'Test');
            });
            it('prepends element', function () {
                var vnode1 = h_1.default('div', [h_1.default('span', 'World')]);
                var vnode2 = h_1.default('div', [h_1.default('span', 'Hello'), h_1.default('span', 'World')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['World']);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['Hello', 'World']);
            });
            it('prepends element of different tag type', function () {
                var vnode1 = h_1.default('div', [h_1.default('span', 'World')]);
                var vnode2 = h_1.default('div', [h_1.default('div', 'Hello'), h_1.default('span', 'World')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['World']);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(prop('tagName'), elm.children), ['DIV', 'SPAN']);
                assert_1.default.deepEqual(map(inner, elm.children), ['Hello', 'World']);
            });
            it('removes elements', function () {
                var vnode1 = h_1.default('div', [h_1.default('span', 'One'), h_1.default('span', 'Two'), h_1.default('span', 'Three')]);
                var vnode2 = h_1.default('div', [h_1.default('span', 'One'), h_1.default('span', 'Three')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['One', 'Two', 'Three']);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['One', 'Three']);
            });
            it('removes a single text node', function () {
                var vnode1 = h_1.default('div', 'One');
                var vnode2 = h_1.default('div');
                patch(vnode0, vnode1);
                assert_1.default.equal(elm.textContent, 'One');
                patch(vnode1, vnode2);
                assert_1.default.equal(elm.textContent, '');
            });
            it('removes a single text node when children are updated', function () {
                var vnode1 = h_1.default('div', 'One');
                var vnode2 = h_1.default('div', [h_1.default('div', 'Two'), h_1.default('span', 'Three')]);
                patch(vnode0, vnode1);
                assert_1.default.equal(elm.textContent, 'One');
                patch(vnode1, vnode2);
                assert_1.default.deepEqual(map(prop('textContent'), elm.childNodes), ['Two', 'Three']);
            });
            it('removes a text node among other elements', function () {
                var vnode1 = h_1.default('div', ['One', h_1.default('span', 'Two')]);
                var vnode2 = h_1.default('div', [h_1.default('div', 'Three')]);
                patch(vnode0, vnode1);
                assert_1.default.deepEqual(map(prop('textContent'), elm.childNodes), ['One', 'Two']);
                patch(vnode1, vnode2);
                assert_1.default.equal(elm.childNodes.length, 1);
                assert_1.default.equal(elm.childNodes[0].tagName, 'DIV');
                assert_1.default.equal(elm.childNodes[0].textContent, 'Three');
            });
            it('reorders elements', function () {
                var vnode1 = h_1.default('div', [h_1.default('span', 'One'), h_1.default('div', 'Two'), h_1.default('b', 'Three')]);
                var vnode2 = h_1.default('div', [h_1.default('b', 'Three'), h_1.default('span', 'One'), h_1.default('div', 'Two')]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['One', 'Two', 'Three']);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(prop('tagName'), elm.children), ['B', 'SPAN', 'DIV']);
                assert_1.default.deepEqual(map(inner, elm.children), ['Three', 'One', 'Two']);
            });
            it('supports null/undefined children', function () {
                var vnode1 = h_1.default('i', [null, h_1.default('i', '1'), h_1.default('i', '2'), null]);
                var vnode2 = h_1.default('i', [h_1.default('i', '2'), undefined, undefined, h_1.default('i', '1'), undefined]);
                var vnode3 = h_1.default('i', [null, h_1.default('i', '1'), undefined, null, h_1.default('i', '2'), undefined, null]);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['1', '2']);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['2', '1']);
                elm = patch(vnode2, vnode3).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['1', '2']);
            });
            it('supports all null/undefined children', function () {
                var vnode1 = h_1.default('i', [h_1.default('i', '1'), h_1.default('i', '2')]);
                var vnode2 = h_1.default('i', [null, undefined]);
                var vnode3 = h_1.default('i', [h_1.default('i', '2'), h_1.default('i', '1')]);
                patch(vnode0, vnode1);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.children.length, 0);
                elm = patch(vnode2, vnode3).elm;
                assert_1.default.deepEqual(map(inner, elm.children), ['2', '1']);
            });
        });
    });
    describe('hooks', function () {
        describe('element hooks', function () {
            it('calls `create` listener before inserted into parent but after children', function () {
                var result = [];
                const cb = (empty, vnode) => {
                    assert_1.default(vnode.elm instanceof Element);
                    assert_1.default.equal(vnode.elm.children.length, 2);
                    assert_1.default.strictEqual(vnode.elm.parentNode, null);
                    result.push(vnode);
                };
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { create: cb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                    h_1.default('span', 'Can\'t touch me'),
                ]);
                patch(vnode0, vnode1);
                assert_1.default.equal(1, result.length);
            });
            it('calls `insert` listener after both parents, siblings and children have been inserted', function () {
                var result = [];
                const cb = (vnode) => {
                    assert_1.default(vnode.elm instanceof Element);
                    assert_1.default.equal(vnode.elm.children.length, 2);
                    assert_1.default.equal(vnode.elm.parentNode.children.length, 3);
                    result.push(vnode);
                };
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { insert: cb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                    h_1.default('span', 'Can touch me'),
                ]);
                patch(vnode0, vnode1);
                assert_1.default.equal(1, result.length);
            });
            it('calls `prepatch` listener', function () {
                var result = [];
                const cb = (oldVnode, vnode) => {
                    assert_1.default.strictEqual(oldVnode, vnode1.children[1]);
                    assert_1.default.strictEqual(vnode, vnode2.children[1]);
                    result.push(vnode);
                };
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { prepatch: cb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                var vnode2 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { prepatch: cb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(result.length, 1);
            });
            it('calls `postpatch` after `prepatch` listener', function () {
                var pre = 0, post = 0;
                function preCb() {
                    pre++;
                }
                function postCb() {
                    assert_1.default.equal(pre, post + 1);
                    post++;
                }
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { prepatch: preCb, postpatch: postCb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                var vnode2 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { prepatch: preCb, postpatch: postCb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(pre, 1);
                assert_1.default.equal(post, 1);
            });
            it('calls `update` listener', function () {
                var result1 = [];
                var result2 = [];
                function cb(result, oldVnode, vnode) {
                    if (result.length > 0) {
                        console.log(result[result.length - 1]);
                        console.log(oldVnode);
                        assert_1.default.strictEqual(result[result.length - 1], oldVnode);
                    }
                    result.push(vnode);
                }
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { update: cb.bind(null, result1) } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', { hook: { update: cb.bind(null, result2) } }, 'Child 2'),
                    ]),
                ]);
                var vnode2 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { update: cb.bind(null, result1) } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', { hook: { update: cb.bind(null, result2) } }, 'Child 2'),
                    ]),
                ]);
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(result1.length, 1);
                assert_1.default.equal(result2.length, 1);
            });
            it('calls `remove` listener', function () {
                var result = [];
                const cb = (vnode, rm) => {
                    var parent = vnode.elm.parentNode;
                    assert_1.default(vnode.elm instanceof Element);
                    assert_1.default.equal(vnode.elm.children.length, 2);
                    assert_1.default.equal(parent.children.length, 2);
                    result.push(vnode);
                    rm();
                    assert_1.default.equal(parent.children.length, 1);
                };
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', { hook: { remove: cb } }, [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                var vnode2 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                ]);
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(1, result.length);
            });
            it('calls `destroy` listener when patching text node over node with children', function () {
                var calls = 0;
                function cb() {
                    calls++;
                }
                var vnode1 = h_1.default('div', [
                    h_1.default('div', { hook: { destroy: cb } }, [
                        h_1.default('span', 'Child 1'),
                    ]),
                ]);
                var vnode2 = h_1.default('div', 'Text node');
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(calls, 1);
            });
            it('calls `init` and `prepatch` listeners on root', function () {
                var count = 0;
                const init = (vnode) => {
                    assert_1.default.strictEqual(vnode, vnode2);
                    count += 1;
                };
                const prepatch = (oldVnode, vnode) => {
                    assert_1.default.strictEqual(vnode, vnode1);
                    count += 1;
                };
                var vnode1 = h_1.default('div', { hook: { init: init, prepatch: prepatch } });
                patch(vnode0, vnode1);
                assert_1.default.equal(1, count);
                var vnode2 = h_1.default('span', { hook: { init: init, prepatch: prepatch } });
                patch(vnode1, vnode2);
                assert_1.default.equal(2, count);
            });
            it('removes element when all remove listeners are done', function () {
                var rm1, rm2, rm3;
                var patch = snabbdom_1.init([
                    { remove: function (_, rm) { rm1 = rm; } },
                    { remove: function (_, rm) { rm2 = rm; } },
                ]);
                var vnode1 = h_1.default('div', [h_1.default('a', { hook: { remove: function (_, rm) { rm3 = rm; } } })]);
                var vnode2 = h_1.default('div', []);
                elm = patch(vnode0, vnode1).elm;
                assert_1.default.equal(elm.children.length, 1);
                elm = patch(vnode1, vnode2).elm;
                assert_1.default.equal(elm.children.length, 1);
                rm1();
                assert_1.default.equal(elm.children.length, 1);
                rm3();
                assert_1.default.equal(elm.children.length, 1);
                rm2();
                assert_1.default.equal(elm.children.length, 0);
            });
            it('invokes remove hook on replaced root', function () {
                var result = [];
                var parent = document.createElement('div');
                var vnode0 = document.createElement('div');
                parent.appendChild(vnode0);
                const cb = (vnode, rm) => {
                    result.push(vnode);
                    rm();
                };
                var vnode1 = h_1.default('div', { hook: { remove: cb } }, [
                    h_1.default('b', 'Child 1'),
                    h_1.default('i', 'Child 2'),
                ]);
                var vnode2 = h_1.default('span', [
                    h_1.default('b', 'Child 1'),
                    h_1.default('i', 'Child 2'),
                ]);
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(1, result.length);
            });
        });
        describe('module hooks', function () {
            it('invokes `pre` and `post` hook', function () {
                var result = [];
                var patch = snabbdom_1.init([
                    { pre: function () { result.push('pre'); } },
                    { post: function () { result.push('post'); } },
                ]);
                var vnode1 = h_1.default('div');
                patch(vnode0, vnode1);
                assert_1.default.deepEqual(result, ['pre', 'post']);
            });
            it('invokes global `destroy` hook for all removed children', function () {
                var result = [];
                const cb = (vnode) => { result.push(vnode); };
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', [
                        h_1.default('span', { hook: { destroy: cb } }, 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                var vnode2 = h_1.default('div');
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(result.length, 1);
            });
            it('handles text vnodes with `undefined` `data` property', function () {
                var vnode1 = h_1.default('div', [
                    ' '
                ]);
                var vnode2 = h_1.default('div', []);
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
            });
            it('invokes `destroy` module hook for all removed children', function () {
                var created = 0;
                var destroyed = 0;
                var patch = snabbdom_1.init([
                    { create: function () { created++; } },
                    { destroy: function () { destroyed++; } },
                ]);
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', 'Child 2'),
                    ]),
                ]);
                var vnode2 = h_1.default('div');
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(created, 4);
                assert_1.default.equal(destroyed, 4);
            });
            it('does not invoke `create` and `remove` module hook for text nodes', function () {
                var created = 0;
                var removed = 0;
                var patch = snabbdom_1.init([
                    { create: function () { created++; } },
                    { remove: function () { removed++; } },
                ]);
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First child'),
                    '',
                    h_1.default('span', 'Third child'),
                ]);
                var vnode2 = h_1.default('div');
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(created, 2);
                assert_1.default.equal(removed, 2);
            });
            it('does not invoke `destroy` module hook for text nodes', function () {
                var created = 0;
                var destroyed = 0;
                var patch = snabbdom_1.init([
                    { create: function () { created++; } },
                    { destroy: function () { destroyed++; } },
                ]);
                var vnode1 = h_1.default('div', [
                    h_1.default('span', 'First sibling'),
                    h_1.default('div', [
                        h_1.default('span', 'Child 1'),
                        h_1.default('span', ['Text 1', 'Text 2']),
                    ]),
                ]);
                var vnode2 = h_1.default('div');
                patch(vnode0, vnode1);
                patch(vnode1, vnode2);
                assert_1.default.equal(created, 4);
                assert_1.default.equal(destroyed, 4);
            });
        });
    });
    describe('short circuiting', function () {
        it('does not update strictly equal vnodes', function () {
            var result = [];
            const cb = (vnode) => { result.push(vnode); };
            var vnode1 = h_1.default('div', [
                h_1.default('span', { hook: { update: cb } }, 'Hello'),
                h_1.default('span', 'there'),
            ]);
            patch(vnode0, vnode1);
            patch(vnode1, vnode1);
            assert_1.default.equal(result.length, 0);
        });
        it('does not update strictly equal children', function () {
            var result = [];
            function cb(vnode) { result.push(vnode); }
            var vnode1 = h_1.default('div', [
                h_1.default('span', { hook: { patch: cb } }, 'Hello'),
                h_1.default('span', 'there'),
            ]);
            var vnode2 = h_1.default('div');
            vnode2.children = vnode1.children;
            patch(vnode0, vnode1);
            patch(vnode1, vnode2);
            assert_1.default.equal(result.length, 0);
        });
    });
});
