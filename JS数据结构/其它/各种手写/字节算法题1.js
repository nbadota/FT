/*
input:const arrest = ["a","a","b","b","c"]
output:["a","2","b","2","c","1"]
 */

function main(arr) {
    let map = new Map(),ans = [];

    arr.forEach((value) => {
        map.has(value) ? map.set(value,(map.get(value) + 1)) : map.set(value,1);
    });

    map.forEach((value,key) => {
        ans.push(`${key}`);
        ans.push(`${value}`);
    });

    return ans;
}

const arrest = ["a","a","b","b","c"];
console.log(main(arrest));
