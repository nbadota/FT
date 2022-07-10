"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vnode_1 = require("./vnode");
const htmldomapi_1 = require("./htmldomapi");
function toVNode(node, domApi) {
    const api = domApi !== undefined ? domApi : htmldomapi_1.default;
    let text;
    if (api.isElement(node)) {
        const id = node.id ? '#' + node.id : '';
        const cn = node.getAttribute('class');
        const c = cn ? '.' + cn.split(' ').join('.') : '';
        const sel = api.tagName(node).toLowerCase() + id + c;
        const attrs = {};
        const children = [];
        let name;
        let i, n;
        const elmAttrs = node.attributes;
        const elmChildren = node.childNodes;
        for (i = 0, n = elmAttrs.length; i < n; i++) {
            name = elmAttrs[i].nodeName;
            if (name !== 'id' && name !== 'class') {
                attrs[name] = elmAttrs[i].nodeValue;
            }
        }
        for (i = 0, n = elmChildren.length; i < n; i++) {
            children.push(toVNode(elmChildren[i], domApi));
        }
        return vnode_1.default(sel, { attrs }, children, undefined, node);
    }
    else if (api.isText(node)) {
        text = api.getTextContent(node);
        return vnode_1.default(undefined, undefined, undefined, text, node);
    }
    else if (api.isComment(node)) {
        text = api.getTextContent(node);
        return vnode_1.default('!', {}, [], text, node);
    }
    else {
        return vnode_1.default('', {}, [], undefined, node);
    }
}
exports.toVNode = toVNode;
exports.default = toVNode;
