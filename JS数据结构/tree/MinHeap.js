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

function swap(array, a, b) {
    const temp = array[a]; // {5}
    array[a] = array[b]; // {6}
    array[b] = temp; // {7}
}

export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // {1}
        this.heap = []; // {2}
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }

    insert(value) {
        if (value != null) {
            this.heap.push(value); // {1}
            this.siftUp(this.heap.length - 1); // {2}
            return true;
        }
        return false;
    }

    siftUp(index) {
        let parent = this.getParentIndex(index); // {1}
        while (
            index > 0 &&
            this.compareFn(this.heap[parent], this.heap[index]) ===
            Compare.BIGGER_THAN
            ) { // {2}
            swap(this.heap, parent, index); // {3}
            index = parent;
            parent = this.getParentIndex(index); // {4}
        }
    }

    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0]; // {1}
    }

    extract() {
        if (this.isEmpty()) {
            return undefined; // {1}
        }
        if (this.size() === 1) {
            return this.heap.shift(); // {2}
        }
        const removedValue = this.heap.shift(); // {3}
        this.siftDown(0); // {4}
        return removedValue; // {5}
    }

    siftDown(index) {
        let element = index;
        const left = this.getLeftIndex(index); // {1}
        const right = this.getRightIndex(index); // {2}
        const size = this.size();
        if (
            left < size &&
            this.compareFn(this.heap[element], this.heap[left]) ===
            Compare.BIGGER_THAN
        ) { // {3}
            element = left; // {4}
        }
        if (
            right < size &&
            this.compareFn(this.heap[element], this.heap[right]) ===
            Compare.BIGGER_THAN
        ) { // {5}
            element = right; // {6}
        }
        if (index !== element) { // {7}
            swap(this.heap, index, element); // {8}
            this.siftDown(element); // {9}
        }
    }

}

export class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn); // {1}
    }
}

function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}

//console.log(1>1);
/*
const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap size: ', heap.size()); // 5
console.log('Heap is empty: ', heap.isEmpty()); // false
console.log('Heap min value: ', heap.findMinimum()); // 1

 */
/*
heap = new MinHeap();
for (let i = 1; i < 10; i++) {
    heap.insert(i);
}
console.log('Extract minimum: ', heap.extract()); // 1

 */

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
//console.log('Heap size: ', maxHeap.size()); // 5
//.log('Heap min value: ', maxHeap.findMinimum()); // 5