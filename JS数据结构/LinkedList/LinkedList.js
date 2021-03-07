function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; // {2}
        this.head = undefined; // {3}
        this.equalsFn = equalsFn; // {4}
    }

    push(element) {
        const node = new Node(element); // {1}
        let current; // {2}
        if (this.head == null) { // {3}
            this.head = node;
        } else {
            current = this.head; // {4}
            while (current.next != null) { // {5} 获得最后一项
                current = current.next;
            }
            // 将其 next 赋为新元素，建立链接
            current.next = node; // {6}
        }
        this.count++; // {7}
    }

    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) { // {1}
            let current = this.head; // {2}
            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--; // {9}
            return current.element;
        }
        return undefined; // {10}
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) { // {1}
            let node = this.head; // {2}
            for (let i = 0; i < index && node != null; i++) { // {3}
                node = node.next;
            }
            return node; // {4}
        }
        return undefined; // {5}
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) { // {1}
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加
                const current = this.head;
                node.next = current; // {2}
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1); // {3}
                const current = previous.next; // {4}
                node.next = current; // {5}
                previous.next = node; // {6}
            }
            this.count++; // 更新链表的长度
            return true;
        }
        return false; // {7}
    }

    indexOf(element) {
        let current = this.head; // {1}
        for (let i = 0; i < this.count && current != null; i++) { // {2}
            if (this.equalsFn(element, current.element)) { // {3}
                return i; // {4}
            }
            current = current.next; // {5}
        }
        return -1; // {6}
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) { // {1}
            return '';
        }
        let objString = `${this.head.element}`; // {2}
        let current = this.head.next; // {3}
        for (let i = 1; i < this.size() && current != null; i++) { // {4}
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString; // {5}
    }
}

//双向链表
class DoublyNode extends Node { // {1}
    constructor(element, next, prev) {
        super(element, next); // {2}
        this.prev = prev; // {3} 新增的
    }
}

class DoublyLinkedList extends LinkedList { // {4}
    constructor(equalsFn = defaultEquals) {
        super(equalsFn); // {5}
        this.tail = undefined; // {6} 新增的
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // {1} 新增的
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head; // {2}
                    current.prev = node; // {3} 新增的
                    this.head = node; // {4}
                }
            } else if (index === this.count) { // 最后一项 // 新增的
                current = this.tail; // {5}
                current.next = node; // {6}
                node.prev = current; // {7}
                this.tail = node; // {8}
            } else {
                const previous = this.getElementAt(index - 1); // {9}
                current = previous.next; // {10}
                node.next = current; // {11}
                previous.next = node; // {12}
                current.prev = node; // {13} 新增的
                node.prev = previous; // {14} 新增的
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next; // {1}
                // 如果只有一项，更新 tail // 新增的
                if (this.count === 1) { // {2}
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined; // {3}
                }
            } else if (index === this.count - 1) { // 最后一项 //新增的
                current = this.tail; // {4}
                this.tail = current.prev; // {5}
                this.tail.next = undefined; // {6}
            } else {
                current = this.getElementAt(index); // {7}
                const previous = current.prev; // {8}
                // 将 previous 与 current 的下一项链接起来——跳过 current
                previous.next = current.next; // {9}
                current.next.prev = previous; // {10} 新增的
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

//循环链表
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node; // {1}
                    node.next = this.head; // {2} 新增的
                } else {
                    node.next = current; // {3}
                    current = this.getElementAt(this.size()); // {4}
                    // 更新最后一个元素
                    this.head = node; // {5}
                    current.next = this.head; // {6} 新增的
                }
            } else { // 这种场景没有变化
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head; // {1}
                    current = this.getElementAt(this.size()); // {2} 新增的
                    this.head = this.head.next; // {3}
                    current.next = this.head; // {4}
                    current = removed; // {5}
                }
            } else {
                // 不需要修改循环链表最后一个元素
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element; // {6}
        }
        return undefined;
    }
}

//有序链表
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

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn; // {3}
    }

    insert(element, index = 0) { // {1}
        if (this.isEmpty()) {
            return super.insert(element, 0); // {2}
        }
        const pos = this.getIndexNextSortedElement(element); // {3}
        return super.insert(element, pos); // {4}
    }
    
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element); // {5}
            if (comp === Compare.LESS_THAN) { // {6}
                return i;
            }
            current = current.next;
        }
        return i; // {7}
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);

