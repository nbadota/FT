"use strict";
//声明数值类型的变量age，但不予赋值,为undefined
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
var jspang = "技术胖 jspang.com";
console.log(jspang);
var b = true;
var c = false;
console.log(b);
var t = 10;
t = "jspang";
t = true;
console.log(t);
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao); //返回了妖 这个字
