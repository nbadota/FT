class Node1 {
    constructor(v) {
        this.value = v;
    }
}
export class UnionFind {
    constructor(values) {
        this.nodes = new Map();
        this.parents = new Map();
        this.sizeMap = new Map();
        for (const v of values) {
            const node = new Node1(v);
            this.nodes.set(v, node);
            this.parents.set(node, node);
            this.sizeMap.set(node, 1);
        }
    }
    isSameSet(a, b) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return false;
        }
        return this.findFather(this.nodes.get(a)) === this.findFather(this.nodes.get(b));
    }
    union(a, b) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return;
        }
        let aHead = this.findFather(this.nodes.get(a));
        let bHead = this.findFather(this.nodes.get(b));
        if (aHead !== bHead) {
            const aSetSize = this.sizeMap.get(aHead);
            const bSetSize = this.sizeMap.get(bHead);
            if (aSetSize >= bSetSize) {
                this.parents.set(bHead, aHead);
                this.sizeMap.set(aHead, aSetSize + bSetSize);
                this.sizeMap.delete(bHead);
            }
            else {
                this.parents.set(aHead, bHead);
                this.sizeMap.set(bHead, aSetSize + bSetSize);
                this.sizeMap.delete(aHead);
            }
        }
    }
    getUnionNum() {
        return this.sizeMap.size;
    }
    findFather(cur) {
        const path = [];
        while (cur !== this.parents.get(cur)) {
            path.push(cur);
            cur = this.parents.get(cur);
        }
        while (path.length) {
            this.parents.set(path.pop(), cur);
        }
        return cur;
    }
}
