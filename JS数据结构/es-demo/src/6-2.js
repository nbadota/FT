const str = '   imooc    '
// 正则
console.log(str)
console.log(str.replace(/^\s+/g, '')) // 去掉前面的空格
console.log(str.replace(/\s+$/g, '')) // 去掉后面的空格

// 去掉前面的空格
console.log(str.trimStart())
console.log(str.trimLeft())
// 去掉后面的空格
console.log(str.trimEnd())
console.log(str.trimRight())

console.log(str.trim())