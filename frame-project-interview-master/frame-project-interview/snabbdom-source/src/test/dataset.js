"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const dataset_1 = require("../modules/dataset");
const snabbdom_1 = require("../snabbdom");
var patch = snabbdom_1.init([
    dataset_1.default
]);
const h_1 = require("../h");
describe('dataset', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = document.createElement('div');
        vnode0 = elm;
    });
    it('is set on initial element creation', function () {
        elm = patch(vnode0, h_1.default('div', { dataset: { foo: 'foo' } })).elm;
        assert_1.default.equal(elm.dataset.foo, 'foo');
    });
    it('updates dataset', function () {
        var vnode1 = h_1.default('i', { dataset: { foo: 'foo', bar: 'bar' } });
        var vnode2 = h_1.default('i', { dataset: { baz: 'baz' } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.dataset.foo, 'foo');
        assert_1.default.equal(elm.dataset.bar, 'bar');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.dataset.baz, 'baz');
        assert_1.default.equal(elm.dataset.foo, undefined);
    });
    it('can be memoized', function () {
        var cachedDataset = { foo: 'foo', bar: 'bar' };
        var vnode1 = h_1.default('i', { dataset: cachedDataset });
        var vnode2 = h_1.default('i', { dataset: cachedDataset });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.dataset.foo, 'foo');
        assert_1.default.equal(elm.dataset.bar, 'bar');
        elm = patch(vnode1, vnode2).elm;
        assert_1.default.equal(elm.dataset.foo, 'foo');
        assert_1.default.equal(elm.dataset.bar, 'bar');
    });
    it('handles string conversions', function () {
        var vnode1 = h_1.default('i', { dataset: { empty: '', dash: '-', dashed: 'foo-bar', camel: 'fooBar', integer: 0, float: 0.1 } });
        elm = patch(vnode0, vnode1).elm;
        assert_1.default.equal(elm.dataset.empty, '');
        assert_1.default.equal(elm.dataset.dash, '-');
        assert_1.default.equal(elm.dataset.dashed, 'foo-bar');
        assert_1.default.equal(elm.dataset.camel, 'fooBar');
        assert_1.default.equal(elm.dataset.integer, '0');
        assert_1.default.equal(elm.dataset.float, '0.1');
    });
});
