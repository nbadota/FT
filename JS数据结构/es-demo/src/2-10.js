// let target = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 4,
//         f: 5,
//         g: 6
//     }
// }
// let source = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 2,
//         f: 3
//     }
// }
// Object.assign(target, source)
// console.log(target)

// let a = 5
// let b = a
// a = 6
// console.log(a, b)
// let obj1 = {
//     name: 'xiecheng',
//     age: 34
// }
// let obj2 = obj1
// obj1.age = 18
// console.log(obj1)
// console.log(obj2)

// let obj1 = {
//     name: 'xiecheng',
//     age: 34
// }
// '{"a": "hello", "b": "world"}'
// 
// let obj = JSON.parse('{"a": "hello", "b": "world"}')
// console.log(obj)
// let str = JSON.stringify(obj)
// console.log(str)
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.age = 18
// console.log(obj2)

// 检查类型
let checkType = data => {
    return Object.prototype.toString.call(data).slice(8, -1)
}
checkType({})

let deepClone = target => {
    let targetType = checkType(target)
    let result
    if (targetType === 'Object') {
        result = {}
    } else if (targetType === 'Array') {
        result = []
    } else {
        return target
    }
    for (let i in target) {
        let value = target[i]
        let valueType = checkType(value)
        if (valueType === 'Object' || valueType === 'Array') {
            result[i] = deepClone(value) // 递归&暴力递归&动态规划
        } else {
            result[i] = value
        }
    }
    return result
}
// let arr1 = [1, 2, {age: 18}]
// let arr2 = deepClone(arr1)
// arr2[2].age = 34
// console.log(arr1)

let obj1 = {
    name: 'xiecheng',
    hobby: ['coding', 'eating']
}
let obj2 = deepClone(obj1)
obj2.hobby[0] = 'sleeping'
console.log(obj1)
console.log(obj2)