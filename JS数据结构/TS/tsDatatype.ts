//声明数值类型的变量age，但不予赋值,为undefined
var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)

var jspang:string = "技术胖 jspang.com"
console.log(jspang)

var b:boolean = true
var c:boolean = false

console.log(b)

var t:any =10
t = "jspang"
t = true
console.log(t)

enum REN{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN.yao)  //返回了妖 这个字