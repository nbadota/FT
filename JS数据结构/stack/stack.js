class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // 方法
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) { // {1}
            return undefined;
        }
        this.count--; // {2}
        const result = this.items[this.count]; // {3}
        delete this.items[this.count]; // {4}
        return result; // {5}
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.items = {};
        this.count = 0;
        /*
        while (!this.isEmpty()) {
        this.pop();
        }
         */
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
            objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
    }
}
const stack = new Stack();
stack.push(5);
stack.push(8);
let str = stack.toString();
console.log(str);
console.log(stack.size());

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { // {1}
        rem = number % 2; // {2}
        remStack.push(rem); // {3}
        number = Math.floor(number / 2); // {4}
    }
    while (!remStack.isEmpty()) { // {5}
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // {7}
    }
    return baseString;
}

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0