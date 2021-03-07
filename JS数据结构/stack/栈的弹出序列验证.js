/*
题目：
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

思路：
1.遍历pushed 模拟push行为
2.模拟栈不为空时 取栈顶元素和popped首元素对比：如果一致 说明发生过pop行为
3.模拟pop行为
4.更新popped对比数据
5.模拟栈为空则表示合法

 */
let a = [1,2,3,4,5]
let b = [5,4,3,2,1]
var validateStackSequences = function(pushed, popped) {
    let stack = []

    for(let v of pushed) {
        stack.push(v)
        while (stack.length && stack[stack.length - 1] === popped[0]) {
            stack.pop()
            popped.shift()
        }
    }

    return !stack.length
};

console.log(validateStackSequences(a,b))