class Stack {
    constructor() {
        this.items = []; // {1}
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size()); // 输出 3
console.log(stack.isEmpty()); // 输出 false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());