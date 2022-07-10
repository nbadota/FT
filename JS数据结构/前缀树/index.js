class TrieTreeNode {
    constructor() {
        this.pass = 0;
        this.end = 0;
        this.nexts = new Array(26);
    }
}
class Trie1 {
    constructor() {
        this.root = new TrieTreeNode();
    }
    insert(word) {
        if (word == null) {
            return;
        }
        const chs = word.split('');
        let node = this.root;
        let path = 0;
        for (let i = 0; i < chs.length; i++) {
            path = chs[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.nexts[path] == null) {
                node.nexts[path] = new TrieTreeNode();
            }
            node = node.nexts[path];
            node.pass++;
        }
        node.end++;
    }
    delete(word) {
        if (this.search(word) !== 0) {
            const chs = word.split('');
            let node = this.root;
            let path = 0;
            for (let i = 0; i < chs.length; i++) {
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
    search(word) {
        if (word == null) {
            return 0;
        }
        const chs = word.split('');
        let node = this.root;
        let path = 0;
        for (let i = 0; i < chs.length; i++) {
            path = chs[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.nexts[path] == null) {
                return 0;
            }
            node = node.nexts[path];
        }
        return node.end;
    }
    prefixNumber(pre) {
        if (pre == null) {
            return 0;
        }
        const chs = pre.split('');
        let node = this.root;
        let path = 0;
        for (let i = 0; i < chs.length; i++) {
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
console.log(trie.search('afk'), trie.insert('afk'), trie.search('afk'), trie.insert('afkkk'), trie.search('afk'), trie.prefixNumber('afk'));
