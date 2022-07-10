"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const snabbdom_1 = require("../snabbdom");
const eventlisteners_1 = require("../modules/eventlisteners");
var patch = snabbdom_1.init([
    eventlisteners_1.default
]);
const h_1 = require("../h");
describe('event listeners', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = document.createElement('div');
        vnode0 = elm;
    });
    it('attaches click event handler to element', function () {
        var result = [];
        function clicked(ev) { result.push(ev); }
        var vnode = h_1.default('div', { on: { click: clicked } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode).elm;
        elm.click();
        assert_1.default.equal(1, result.length);
    });
    it('does not attach new listener', function () {
        var result = [];
        // function clicked(ev) { result.push(ev); }
        var vnode1 = h_1.default('div', { on: { click: function (ev) { result.push(1); } } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        var vnode2 = h_1.default('div', { on: { click: function (ev) { result.push(2); } } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        elm = patch(vnode1, vnode2).elm;
        elm.click();
        assert_1.default.deepEqual(result, [1, 2]);
    });
    it('does calls handler for function in array', function () {
        var result = [];
        function clicked(ev) { result.push(ev); }
        var vnode = h_1.default('div', { on: { click: [clicked, 1] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode).elm;
        elm.click();
        assert_1.default.deepEqual(result, [1]);
    });
    it('handles changed value in array', function () {
        var result = [];
        function clicked(ev) { result.push(ev); }
        var vnode1 = h_1.default('div', { on: { click: [clicked, 1] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        var vnode2 = h_1.default('div', { on: { click: [clicked, 2] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        var vnode3 = h_1.default('div', { on: { click: [clicked, 3] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        elm = patch(vnode1, vnode2).elm;
        elm.click();
        elm = patch(vnode2, vnode3).elm;
        elm.click();
        assert_1.default.deepEqual(result, [1, 2, 3]);
    });
    it('handles changed several values in array', function () {
        var result = [];
        function clicked() { result.push([].slice.call(arguments, 0, arguments.length - 2)); }
        var vnode1 = h_1.default('div', { on: { click: [clicked, 1, 2, 3] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        var vnode2 = h_1.default('div', { on: { click: [clicked, 1, 2] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        var vnode3 = h_1.default('div', { on: { click: [clicked, 2, 3] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        elm = patch(vnode1, vnode2).elm;
        elm.click();
        elm = patch(vnode2, vnode3).elm;
        elm.click();
        assert_1.default.deepEqual(result, [[1, 2, 3], [1, 2], [2, 3]]);
    });
    it('detach attached click event handler to element', function () {
        var result = [];
        function clicked(ev) { result.push(ev); }
        var vnode1 = h_1.default('div', { on: { click: clicked } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        assert_1.default.equal(1, result.length);
        var vnode2 = h_1.default('div', { on: {} }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode1, vnode2).elm;
        elm.click();
        assert_1.default.equal(1, result.length);
    });
    it('multiple event handlers for same event on same element', function () {
        var called = 0;
        function clicked(ev, vnode) {
            ++called;
            // Check that the first argument is an event
            assert_1.default.equal(true, 'target' in ev);
            // Check that the second argument was a vnode
            assert_1.default.equal(vnode.sel, 'div');
        }
        var vnode1 = h_1.default('div', { on: { click: [[clicked], [clicked], [clicked]] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        assert_1.default.equal(3, called);
        var vnode2 = h_1.default('div', { on: { click: [[clicked], [clicked]] } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode1, vnode2).elm;
        elm.click();
        assert_1.default.equal(5, called);
    });
    it('access to virtual node in event handler', function () {
        var result = [];
        function clicked(ev, vnode) { result.push(this); result.push(vnode); }
        var vnode1 = h_1.default('div', { on: { click: clicked } }, [
            h_1.default('a', 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        assert_1.default.equal(2, result.length);
        assert_1.default.equal(vnode1, result[0]);
        assert_1.default.equal(vnode1, result[1]);
    }),
        it('access to virtual node in event handler with argument', function () {
            var result = [];
            function clicked(arg, ev, vnode) { result.push(this); result.push(vnode); }
            var vnode1 = h_1.default('div', { on: { click: [clicked, 1] } }, [
                h_1.default('a', 'Click my parent'),
            ]);
            elm = patch(vnode0, vnode1).elm;
            elm.click();
            assert_1.default.equal(2, result.length);
            assert_1.default.equal(vnode1, result[0]);
            assert_1.default.equal(vnode1, result[1]);
        }),
        it('access to virtual node in event handler with arguments', function () {
            var result = [];
            function clicked(arg1, arg2, ev, vnode) { result.push(this); result.push(vnode); }
            var vnode1 = h_1.default('div', { on: { click: [clicked, 1, "2"] } }, [
                h_1.default('a', 'Click my parent'),
            ]);
            elm = patch(vnode0, vnode1).elm;
            elm.click();
            assert_1.default.equal(2, result.length);
            assert_1.default.equal(vnode1, result[0]);
            assert_1.default.equal(vnode1, result[1]);
        });
    it('shared handlers in parent and child nodes', function () {
        var result = [];
        var sharedHandlers = {
            click: function (ev) { result.push(ev); }
        };
        var vnode1 = h_1.default('div', { on: sharedHandlers }, [
            h_1.default('a', { on: sharedHandlers }, 'Click my parent'),
        ]);
        elm = patch(vnode0, vnode1).elm;
        elm.click();
        assert_1.default.equal(1, result.length);
        elm.firstChild.click();
        assert_1.default.equal(3, result.length);
    });
});
