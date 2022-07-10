// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
}

// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

// 实例
const xialuo = new Student('夏洛', 100)
//console.log(xialuo.name)
//console.log(xialuo.number)
//xialuo.sayHi()
//xialuo.eat()

// 实例
const wanglaoshi = new Teacher('王老师', '语文')
//console.log(wanglaoshi.name)
//console.log(wanglaoshi.major)
//wanglaoshi.teach()
//wanglaoshi.eat()
//console.log(Teacher)
console.log(People.prototype)
console.log(Teacher.prototype.__proto__)
console.log(People.prototype === Teacher.prototype.__proto__)
/*
每个class都有显示原型prototype
每个实例都有隐式原型_proto_
实例的_proto_指向class的prototype
 */
