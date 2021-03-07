/*
解题思路
队列的前端对应栈顶，后端对应栈底
每次入栈操作，先把新元素放到队列的最后，再将之前的所有元素依次出队再依次入队。这样保证了先来的元素排在后来的元素的后面。
另外，题意要求用队列实现栈，也就是说只能从数组的前端删除元素，只能从数组的后端添加元素。虽然js中队列和栈都用数组来模拟实现，但删除和添加元素应该在数组的两端分开进行。
 */


var MyStack = function() {
    this.queue = [];
    this.prevNum = 0;  //当前队列中的元素数量，也可以直接用queue.length
};

MyStack.prototype.push = function(x) {
    let curr = 0;
    this.queue.push(x);
    while (curr < this.prevNum) {
        this.queue.push(this.queue.shift());
        curr++;
    };
    this.prevNum++;
};

MyStack.prototype.pop = function() {
    if (this.prevNum > 0) {
        this.prevNum--;
        return this.queue.shift();
    };
};

MyStack.prototype.top = function() {
    return this.queue[0];
};

MyStack.prototype.empty = function() {
    return this.prevNum === 0;
};

