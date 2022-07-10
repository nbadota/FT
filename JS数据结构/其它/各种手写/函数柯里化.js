function currying(fn, ...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => currying(fn, ...args, ...args2);
    }
  }

function fun (a,b,c) {
    //console.log(a);
    //console.log(b);
    //console.log(c);
    console.log(a+b+c);

}

//const curryingFun = currying(fun)
//curryingFun(1)(2)(3);  // 1 2 3
//curryingFun(1, 2)(3);  // 1 2 3
//curryingFun(1, 2, 3);  // 1 2 3

//柯里化变式1
/*
Add(1)(2)(3).sumOf(); // 输出 6
Add(1,2)(3)(4).sumOf(); // 输出 10
Add(1,2,...)(3)(4)(...).sumOf();  // ...
 */


function Add() {
    const nums = [...arguments];
    function AddPro() {
        nums.push(...arguments);
        return AddPro;
    }
    AddPro.sumOf = () => {
        return nums.reduce((a, b) => a + b);
    }
    return AddPro;
}

console.log(Add(1)(2)(3).sumOf()); // 输出 6
console.log(Add(1,2)(3)(4).sumOf()); // 输出 10

//柯里化变式2
/*
sum(1,2,3,4,5)   sum(1,2,3)(4,5)  sum(1)(2)(3)(4)(5)  //15
 */

function sum(...args) {
    if(args.length === 5) {
        return args.reduce((cur,next) => { return cur + next},0);
    }else {
        return (...args2) => sum(...args, ...args2);
    }
}

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3)(4,5));
console.log(sum(1)(2)(3)(4)(5));

