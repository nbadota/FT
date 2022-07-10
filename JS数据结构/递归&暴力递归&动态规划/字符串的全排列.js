const ans = [];
process('abc'.split(''),0,ans);
console.log(ans);
function process(str,i,ans) {
    if(i === str.length) {
        ans.push(str.join(''));
        //return;
    }
    const set = new Set();
    for (let j = i;j < str.length;j++) {
        //去重
        if(!set.has(str[j])) {
            set.add(str[j]);
            swap(str,i,j);
            process(str,i + 1,ans);
            swap(str,i,j);
        }
    }
}

function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}