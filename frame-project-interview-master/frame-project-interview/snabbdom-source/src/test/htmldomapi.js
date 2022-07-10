"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const snabbdom_1 = require("../snabbdom");
const h_1 = require("../h");
const attributes_1 = require("../modules/attributes");
var patch = snabbdom_1.init([
    attributes_1.default
]);
describe('svg', function () {
    var elm, vnode0;
    beforeEach(function () {
        elm = document.createElement('svg');
        vnode0 = elm;
    });
    it('removes child svg elements', function () {
        var a = h_1.default('svg', {}, [
            h_1.default('g'),
            h_1.default('g')
        ]);
        var b = h_1.default('svg', {}, [
            h_1.default('g')
        ]);
        var result = patch(patch(vnode0, a), b).elm;
        assert_1.default.equal(result.childNodes.length, 1);
    });
    it('adds correctly xlink namespaced attribute', function () {
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        var testUrl = '/test';
        var a = h_1.default('svg', {}, [
            h_1.default('use', {
                attrs: { 'xlink:href': testUrl }
            }, [])
        ]);
        var result = patch(vnode0, a).elm;
        assert_1.default.equal(result.childNodes.length, 1);
        const child = result.childNodes[0];
        assert_1.default.equal(child.getAttribute('xlink:href'), testUrl);
        assert_1.default.equal(child.getAttributeNS(xlinkNS, 'href'), testUrl);
    });
    it('adds correctly xml namespaced attribute', function () {
        var xmlNS = 'http://www.w3.org/XML/1998/namespace';
        var testAttrValue = 'und';
        var a = h_1.default('svg', { attrs: { 'xml:lang': testAttrValue } }, []);
        var result = patch(vnode0, a).elm;
        assert_1.default.equal(result.getAttributeNS(xmlNS, 'lang'), testAttrValue);
        assert_1.default.equal(result.getAttribute('xml:lang'), testAttrValue);
    });
});
