/*
 给定一个字符串, 里面只有a, b, c三种字符， 要求从头遍历到尾， 去掉所有的 b, 和所有的 ac
 */
let str = 'abcabcabcabc'
function fuc(str) {
    const test = /(b|ac)/g;
    if(str.match(test)) {
        return fuc(str.replace(/(b|ac)/g,'')) //.replace(/ac/g,'');
    }else {
        return str
    }
}

console.log(fuc(str));