class Node1<T> {
    public value: T;
    constructor(v:T) {
        this.value = v;
    }
}

export class UnionFind<T> {
    public nodes:Map<T,Node1<T>> = new Map<T,Node1<T>>();
    public parents:Map<Node1<T>,Node1<T>> = new Map<Node1<T>,Node1<T>>();
    public sizeMap:Map<Node1<T>,number> = new Map<Node1<T>,number>();

    constructor(values:T[]) {
       for(const v of values) {
           const node = new Node1(v);
           this.nodes.set(v,node);
           this.parents.set(node,node);
           this.sizeMap.set(node,1);
       }
    }

    public isSameSet (a:T, b:T) {
        if (!this.nodes.has(a) || !this.nodes.has(b)) {
            return false;
        }
        return this.findFather(this.nodes.get(a)) ===  this.findFather(this.nodes.get(b));
    }

    public union(a:T,b:T) {
        if(!this.nodes.has(a) || !this.nodes.has(b)) {
            return;
        }
        let aHead = this.findFather(this.nodes.get(a));
        let bHead = this.findFather(this.nodes.get(b));
        if(aHead !== bHead) {
            const aSetSize = this.sizeMap.get(aHead);
            const bSetSize = this.sizeMap.get(bHead);
            if(aSetSize >= bSetSize) {
                this.parents.set(bHead,aHead);
                this.sizeMap.set(aHead,aSetSize + bSetSize);
                this.sizeMap.delete(bHead);
            }else {
                this.parents.set(aHead,bHead);
                this.sizeMap.set(bHead,aSetSize + bSetSize);
                this.sizeMap.delete(aHead);
            }
        }
    }

    public getUnionNum () {
        return this.sizeMap.size;
    }


    private findFather(cur: Node1<T>) {
        const path:Node1<T>[] = [];
        while (cur !== this.parents.get(cur)){
            path.push(cur);
            cur = this.parents.get(cur);
        }
        while (path.length) {
            this.parents.set(path.pop(),cur);
        }
        return cur;
    }
}