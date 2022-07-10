// 去重
let arr = [1,"2",3,4,5]
let res1 = Array.from(new Set(arr))
let res2 = [...new  Set(arr)]
function removeTwo (arr) {
    let obj = {}
    arr.forEach(item => {
        obj[item] = ''
    })
    return Object.keys(obj);
}

// 扁平
function flatten(array) {
    return array.reduce(
      (target, current) =>
        Array.isArray(current) ?
          target.concat(flatten(current)) :
          target.concat(current)
      , [])
}

// 最值
let array = []
array.reduce((c,n)=>Math.max(c,n))
Math.max(...array);