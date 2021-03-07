const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) { // {1}
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}

class Node {
    constructor(key) {
        this.key = key; // {1} 节点值
        this.left = null; // 左侧子节点引用
        this.right = null; // 右侧子节点引用
    }
}

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // 用来比较节点值
        this.root = null; // {1} Node 类型的根节点
    }

    insert(key) {
        if (this.root == null) { // {1}
            this.root = new Node(key); // {2}
        } else {
            this.insertNode(this.root, key); // {3}
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // {4}
            if (node.left == null) { // {5}
                node.left = new Node(key); // {6}
            } else {
                this.insertNode(node.left, key); // {7}
            }
        } else {
            if (node.right == null) { // {8}
                node.right = new Node(key); // {9}
            } else {
                this.insertNode(node.right, key); // {10}
            }
        }
    }

    //中序遍历
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback); // {1}
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) { // {2}
            this.inOrderTraverseNode(node.left, callback); // {3}
            callback(node.key); // {4}
            this.inOrderTraverseNode(node.right, callback); // {5}
        }
    }

    //先序遍历
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key); // {1}
            this.preOrderTraverseNode(node.left, callback); // {2}
            this.preOrderTraverseNode(node.right, callback); // {3}
        }
    }

    //后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback); // {1}
            this.postOrderTraverseNode(node.right, callback); // {2}
            callback(node.key); // {3}
        }
    }

    min() {
        return this.minNode(this.root); // {1}
    }
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) { // {2}
            current = current.left; // {3}
        }
        return current; // {4}
    }

    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) { // {5}
            current = current.right;
        }
        return current;
    }

    search(key) {
        return this.searchNode(this.root, key); // {1}
    }
    searchNode(node, key) {
        if (node == null) { // {2}
            return false;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // {3}
            return this.searchNode(node.left, key); // {4}
        } else if (
            this.compareFn(key, node.key) === Compare.BIGGER_THAN
        ) { // {5}
            return this.searchNode(node.right, key); // {6}
        } else {
            return true; // {7}
        }
    }

    remove(key) {
        this.root = this.removeNode(this.root, key); // {1}
    }
    removeNode(node, key) {
        if (node == null) { // {2}
            return null;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) { // {3}
            node.left = this.removeNode(node.left, key); // {4}
            return node; // {5}
        } else if (
            this.compareFn(key, node.key) === Compare.BIGGER_THAN
        ) { // {6}
            node.right = this.removeNode(node.right, key); // {7}
            return node; // {8}
        } else {
            // 键等于 node.key
            // 第一种情况
            if (node.left == null && node.right == null) { // {9}
                node = null; // {10}
                return node; // {11}
            }
            // 第二种情况
            if (node.left == null) { // {12}
                node = node.right; // {13}
                return node; // {14}
            } else if (node.right == null) { // {15}
                node = node.left; // {16}
                return node; // {17}
            }
            // 第三种情况
            const aux = this.minNode(node.right); // {18}
            node.key = aux.key; // {19}
            node.right = this.removeNode(node.right, aux.key); // {20}
            return node; // {21}
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

const printNode = (value) => console.log(value); // {6}
tree.inOrderTraverse(printNode); // {7}

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');