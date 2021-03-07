/*
题目
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

#思路
考虑完全所有情况

1.只能出现数字、符号位、小数点、指数位
2.小数点，指数符号只能出现一次、且不能出现在开头结尾
3.指数位出现后，小数点不允许在出现
4.符号位只能出现在开头和指数位后面
 */
let srt = '-1e-'
console.log(isNumber(srt))
function isNumber (s) {
    if(!s) return false
    let hasNum = false
    let hasDot = false
    let hasE = false
    let isEe = t => t === 'e' || t === 'E'
    let isAs = t => t === '+' || t === '-'
    s = s.trim()                       // 0. 去除首尾空格
    for(let i = 0; i < s.length; i++){
        let t = s[i]
        if ( t === ' ' ) {               // 1. 空格
            return false
        } else if( t >= 0 && t <= 9 ) {  // 2. 数字
            hasNum = true
        } else if( t === '.' ) {        // 3. 小数点
            if( hasDot || hasE ) return false
            hasDot = true
        } else if( isEe(t) ){           // 4. e 或者 E
            if( !hasNum || hasE ) return false
            hasE = true
            hasNum = false                // 防止eE后没有数字了
        } else if( isAs(t) ) {          // 5. + - 符号
            if( i > 0 && !isEe( s[i - 1] ) ) return false
        } else {
            return false
        }
    }
    return hasNum
};

