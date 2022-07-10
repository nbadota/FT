// https://www.cnblogs.com/goloving/p/9393556.html

function format(num) {
    var str = num+'';
    // ["8", "7", "6", "5", "4", "3", "2", "1"]
    return str.split("").reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev;
    })
}
console.log(format(12345678));