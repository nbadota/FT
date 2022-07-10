 Function.prototype.myCall = function(context) {
    /*if (typeof this !== 'function') {
        throw new TypeError('Error')
    }*/
    //console.log(context)  //{ name: 'xxx' }
    context = context || window; //第一个参数为null或者undefined时，this指向全局对象window
    context.fn = this;    // 非常关键：改变 this 的作用域
    console.log(this === Function.prototype)    //[Function: test]
    console.log(context.fn)//[Function: test]
    const args = [...arguments].slice(1); //从 Arguments 对象中取取第二到最后一个参数放到一个数组里
    const result = context.fn(...args);   //把这个参数数组放到要执行的函数的参数里面去
    delete context.fn;  // 必须删除，会给 context 增加方法 fn
    return result;
}
// 简单测试
let obj = {
    name: 'xxx'
};
function test(){
    console.log('arguments=',arguments); // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log('this=',this); // {name: "xxx", fn: ƒ}
}

test.myCall(obj,1,2)
//console.log(obj)// 必须删除，会给 context 增加方法 fn


Function.prototype.mycall = function (context = window, args) {
    if(this === Function.prototype) {
        return undefined
    }
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}

Function.prototype.myapply = function (context = window, args) {
    if(this === Function.prototype) {
        return undefined
    }
    const fn = Symbol();
    context[fn] = this;
    let result;
    if (Array.isArray(args)) {
    result = context[fn](...args);
    } else {
    result = context[fn]();
    }
    delete context[fn];
    return result;
}

Function.prototype.mybind = function (context = window, args) {
    const self = this
    // bind返回一个函数
    return function () {
        return self.apply(context, ...args)
    }
}
