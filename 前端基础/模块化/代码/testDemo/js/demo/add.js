/* 
    小A同学封装，进行两个数的和计算的模块
    可以写很多个函数，一般情况下把实现同类型功能的函数，放在一个模块。

    遵从AMD规范
*/
define(function(){
    function add(x, y){
        return x + y;
    }
    function show(){
        console.log("hello world");
    }
    function ccc(){
        console.log("在mul中要去使用的函数")
    }
    // 对外暴露
    return {
        outAdd: add,
        outShow: show,
        ccc: ccc
    }

});
