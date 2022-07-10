class TrieTreeNode {
    public pass:number;
    public end:number;
    public nexts:TrieTreeNode[];
    constructor() {
        this.pass = 0;
        this.end = 0;
        this.nexts = new Array(26);
    }
}

class Trie1 {
    private root:TrieTreeNode;
    constructor() {
        this.root = new TrieTreeNode();
    }

    public insert(word:string):void {
        if (word == null) {
            return;
        }
        const chs:string[] = word.split('');
        let node:TrieTreeNode = this.root;
        let path = 0;
        for (let i=0;i<chs.length;i++) {
            path = chs[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.nexts[path] == null) {
                node.nexts[path] = new TrieTreeNode();
            }
            node = node.nexts[path];
            node.pass++;
        }
        node.end++;
    }

    public delete(word:string):void {
        if(this.search(word) !== 0) {
            const chs:string[] = word.split('');
            let node:TrieTreeNode = this.root;
            let path = 0;
            for (let i=0;i<chs.length;i++) {
                path = chs[i].charCodeAt(0) - 'a'.charCodeAt(0);
                if (--node.nexts[path].pass === 0) {
                    node.nexts[path] = null;
                    return;
                }
                node = node.nexts[path];
            }
            node.end--;
        }
    }

    public search(word:string):number {
        if (word == null) {
            return 0;
        }
        const chs:string[] = word.split('');
        let node:TrieTreeNode = this.root;
        let path = 0;
        for (let i=0;i<chs.length;i++) {
            path = chs[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.nexts[path] == null) {
               return 0;
            }
            node = node.nexts[path];
        }
        return node.end;
    }

    public prefixNumber(pre:string):number {
        if (pre == null) {
            return 0;
        }
        const chs:string[] = pre.split('');
        let node:TrieTreeNode = this.root;
        let path = 0;
        for (let i=0;i<chs.length;i++) {
            path = chs[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.nexts[path] == null) {
                return 0;
            }
            node = node.nexts[path];
        }
        return node.pass;
    }
}

let trie = new Trie1();
console.log(
    trie.search('afk'),
    trie.insert('afk'),
    trie.search('afk'),
    trie.insert('afkkk'),
    trie.search('afk'),
    trie.prefixNumber('afk')
);