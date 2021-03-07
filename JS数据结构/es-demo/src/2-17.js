// unicode
// es6 \uxxxx 码点 0000~ffff
// \u20BB7 -> \u20BB+7
// \u{20BB7}
// \u{41} -> A

// z
// console.log('\z' === 'z')
//  \HHH
// console.log('\172' === 'z')

// \xHH \x7A

// \u007A
// \u{7A}

// for(let item of 'imooc'){
//     console.log(item)
// }

// 模板字符串
// const str1 = '阿斯顿发斯\n'
// + '蒂芬阿萨德法师法\n'
// + '师按时发顺丰'
// console.log(str1);

// const str3 = `阿斯顿发斯
// 蒂芬阿萨德法师法
// 师按时发顺丰`
// console.log(str3);

// const str4 = `
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// `
// console.log(str4)

// const a = 20
// const b = 14
// const c = 'ES'
// const str2 = '我的年龄是:' + (a + b) + ',我在讲' + c
// console.log(str2)
// const str5 = `我的年龄是:${a+b},我在讲${c}`
// console.log(str5)

// 嵌套模板
// const isLargeScreen = () => {
//     return true
// }
// let class1 = 'icon'
// class1 += isLargeScreen() ? ' icon-big':' icon-small'
// console.log(class1)

// const class2 = `icon icon-${isLargeScreen()?'big':'small'}`
// console.log(class2)

// 带标签的模板字符串
// const foo = (a, b, c, d) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// // foo(1, 2, 3, 4)
// const name = 'xiecheng'
// const age = 34
// foo`这是${name},他的年龄是${age}岁`

// console.log(String.fromCharCode(0x20BB7)) // ES5
// console.log(String.fromCodePoint(0x20BB7)) // ES6

// indexOf
const str = 'imooc'
// console.log(str.indexOf('mo1'))
// console.log(str.includes('mo1'))
// console.log(str.startsWith('im'))
// console.log(str.endsWith('mooc'))
const newStr = str.repeat(10)
console.log(newStr)
