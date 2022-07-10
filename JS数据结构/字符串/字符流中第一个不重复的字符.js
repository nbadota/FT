/*
思路：只能用自带的Map(),不能用对象
 */

let s = "abaccdeff"
console.log(firstuniqchar(s))
function firstuniqchar(s) {
    let map = new Map()
    for(let item of s){
        map.set(item,(map.get(item) || 0) + 1)
    }
    for(let [k,v] of map.entries()){
        if (v===1) return k
    }
    return ' '
}