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
