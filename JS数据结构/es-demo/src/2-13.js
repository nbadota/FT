class People {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._sex = -1
    }
    // static count = 0
    get sex() { // 属性
        if (this._sex === 1) {
            return 'male'
        } else if (this._sex === 0) {
            return 'female'
        } else {
            return 'error'
        }
    }
    set sex(val) { // 1:male 0:female
        if (val === 0 || val === 1) {
            this._sex = val
        }
    }
    showName() {
        console.log(this.name)
    }
    // 静态方法
    static getCount() {
        return 5
    }
}
// 静态属性
People.count = 9
console.log(typeof People) // function
console.log(People.count)

let p1 = new People('xiecheng', 34)
console.log(p1)
p1.sex = 5
console.log(p1.sex)
console.log(People.getCount())

class Coder extends People {
    constructor(name, age, company) {
        super(name, age)
        this.company = company
    }
    showCompany() {
        console.log(this.company)
    }
}

let c1 = new Coder('zhangsan', 25, 'imooc')
console.log(c1)
c1.showName()
c1.showCompany()
c1.sex = 1
console.log(c1.sex)
console.log(Coder.getCount())