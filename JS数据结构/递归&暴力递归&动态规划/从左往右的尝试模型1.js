/*
规定1和A对应，2和B对应，3和C对应。。。
那么一个数字字符串比如‘111’就可以转化为：
‘AAA’，‘KA’，‘AK’
给定一个只有数字字符组成的字符串str，返回有多少种转化结果
 */
console.log(process('111',0));
function process(str,i) {
    if(i === str.length) {
        return 1;
    }

    if(str[i] === '0') {
        return 0;
    }

    if(str[i] === '1') {
        let res = process(str,i+1);
        if(i+1 < str.length) {
            res += process(str,i+2);
        }
        return res;
    }
    if(str[i] === '2') {
        let res = process(str,i+1);
        if(i+1 < str.length && str[i+1] >= '0' && str[i+1] <= '6') {
            res += process(str,i+2);
        }
        return res;
    }
    return process(str,i+1);
}