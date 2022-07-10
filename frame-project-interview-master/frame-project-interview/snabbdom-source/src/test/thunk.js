"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const snabbdom_1 = require("../snabbdom");
var patch = snabbdom_1.init([]);
const h_1 = require("../h");
const thunk_1 = require("../thunk");
describe('thunk', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = vnode0 = document.createElement('div');
    });
    it('returns vnode with data and render function', function () {
        function numberInSpan(n) {
            return h_1.default('span', 'Number is ' + n);
        }
        var vnode = thunk_1.default('span', 'num', numberInSpan, [22]);
        assert_1.default.deepEqual(vnode.sel, 'span');
        assert_1.default.deepEqual(vnode.data.key, 'num');
        assert_1.default.deepEqual(vnode.data.args, [22]);
    });
    it('calls render function once on data change', function () {
        var called = 0;
        function numberInSpan(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        var vnode1 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        var vnode2 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [2])
        ]);
        patch(vnode0, vnode1);
        assert_1.default.equal(called, 1);
        patch(vnode1, vnode2);
        assert_1.default.equal(called, 2);
    });
    it('does not call render function on data unchanged', function () {
        var called = 0;
        function numberInSpan(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        var vnode1 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        var vnode2 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        patch(vnode0, vnode1);
        assert_1.default.equal(called, 1);
        patch(vnode1, vnode2);
        assert_1.default.equal(called, 1);
    });
    it('calls render function once on data-length change', function () {
        var called = 0;
        function numberInSpan(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        var vnode1 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        var vnode2 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1, 2])
        ]);
        patch(vnode0, vnode1);
        assert_1.default.equal(called, 1);
        patch(vnode1, vnode2);
        assert_1.default.equal(called, 2);
    });
    it('calls render function once on function change', function () {
        var called = 0;
        function numberInSpan(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        function numberInSpan2(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number really is ' + n);
        }
        var vnode1 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        var vnode2 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan2, [1])
        ]);
        patch(vnode0, vnode1);
        assert_1.default.equal(called, 1);
        patch(vnode1, vnode2);
        assert_1.default.equal(called, 2);
    });
    it('renders correctly', function () {
        var called = 0;
        function numberInSpan(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        var vnode1 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        var vnode2 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [1])
        ]);
        var vnode3 = h_1.default('div', [
            thunk_1.default('span', 'num', numberInSpan, [2])
        ]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.firstChild.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.firstChild.innerHTML, 'Number is 1');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.firstChild.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.firstChild.innerHTML, 'Number is 1');
        elm = patch(vnode2, vnode3).elm;
        assert_1.default.equal(elm.firstChild.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.firstChild.innerHTML, 'Number is 2');
        assert_1.default.equal(called, 2);
    });
    it('supports leaving out the `key` argument', function () {
        function vnodeFn(s) {
            return h_1.default('span.number', 'Hello ' + s);
        }
        var vnode1 = thunk_1.default('span.number', vnodeFn, ['World!']);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.innerText, 'Hello World!');
    });
    it('renders correctly when root', function () {
        var called = 0;
        function numberInSpan(n) {
            called++;
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        var vnode1 = thunk_1.default('span', 'num', numberInSpan, [1]);
        var vnode2 = thunk_1.default('span', 'num', numberInSpan, [1]);
        var vnode3 = thunk_1.default('span', 'num', numberInSpan, [2]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.innerHTML, 'Number is 1');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.innerHTML, 'Number is 1');
        elm = patch(vnode2, vnode3).elm;
        assert_1.default.equal(elm.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.innerHTML, 'Number is 2');
        assert_1.default.equal(called, 2);
    });
    it('can be replaced and removed', function () {
        function numberInSpan(n) {
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        function oddEven(n) {
            var prefix = (n % 2) === 0 ? 'Even' : 'Odd';
            return h_1.default('div', { key: oddEven }, prefix + ': ' + n);
        }
        var vnode1 = h_1.default('div', [thunk_1.default('span', 'num', numberInSpan, [1])]);
        var vnode2 = h_1.default('div', [thunk_1.default('div', 'oddEven', oddEven, [4])]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.firstChild.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.firstChild.innerHTML, 'Number is 1');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.firstChild.tagName.toLowerCase(), 'div');
        assert_1.default.equal(elm.firstChild.innerHTML, 'Even: 4');
    });
    it('can be replaced and removed when root', function () {
        function numberInSpan(n) {
            return h_1.default('span', { key: 'num' }, 'Number is ' + n);
        }
        function oddEven(n) {
            var prefix = (n % 2) === 0 ? 'Even' : 'Odd';
            return h_1.default('div', { key: oddEven }, prefix + ': ' + n);
        }
        var vnode1 = thunk_1.default('span', 'num', numberInSpan, [1]);
        var vnode2 = thunk_1.default('div', 'oddEven', oddEven, [4]);
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.tagName.toLowerCase(), 'span');
        assert_1.default.equal(elm.innerHTML, 'Number is 1');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.tagName.toLowerCase(), 'div');
        assert_1.default.equal(elm.innerHTML, 'Even: 4');
    });
    it('invokes destroy hook on thunks', function () {
        var called = 0;
        function destroyHook() {
            called++;
        }
        function numberInSpan(n) {
            return h_1.default('span', { key: 'num', hook: { destroy: destroyHook } }, 'Number is ' + n);
        }
        var vnode1 = h_1.default('div', [
            h_1.default('div', 'Foo'),
            thunk_1.default('span', 'num', numberInSpan, [1]),
            h_1.default('div', 'Foo')
        ]);
        var vnode2 = h_1.default('div', [
            h_1.default('div', 'Foo'),
            h_1.default('div', 'Foo')
        ]);
        patch(vnode0, vnode1);
        patch(vnode1, vnode2);
        assert_1.default.equal(called, 1);
    });
    it('invokes remove hook on thunks', function () {
        var called = 0;
        function hook() {
            called++;
        }
        function numberInSpan(n) {
            return h_1.default('span', { key: 'num', hook: { remove: hook } }, 'Number is ' + n);
        }
        var vnode1 = h_1.default('div', [
            h_1.default('div', 'Foo'),
            thunk_1.default('span', 'num', numberInSpan, [1]),
            h_1.default('div', 'Foo')
        ]);
        var vnode2 = h_1.default('div', [
            h_1.default('div', 'Foo'),
            h_1.default('div', 'Foo')
        ]);
        patch(vnode0, vnode1);
        patch(vnode1, vnode2);
        assert_1.default.equal(called, 1);
    });
});
