"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vnode(sel, data, children, text, elm) {
    let key = data === undefined ? undefined : data.key;
    return { sel, data, children, text, elm, key };
}
exports.vnode = vnode;
exports.default = vnode;
