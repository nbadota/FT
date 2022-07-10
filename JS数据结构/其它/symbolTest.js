const sym = Symbol('imooc')
class User {
    constructor(name) {
        this.name = name
        this[sym] = 'imooc.com'
    }
    getName() {
        return this.name + this[sym]
    }
}
const user = new User('xiecheng')
console.log(user.getName())

for (let key in user) {
    console.log('key1 ',key)
}

for (let key of Object.keys(user)) {
    console.log('key2 ', key)
}

for (let key of Object.getOwnPropertySymbols(user)) {
    console.log('key3 ',key)
}

for (let key of Reflect.ownKeys(user)) {
    console.log('key4 ',key)
}
/*
function a (fn) {
    return function () {
        fn(...arguments)
    }
}

function b (a = 1 ,b = 2) {
    console.log(a,b)
}

a(b)()
*/