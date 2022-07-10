let a = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(getMaxWindow(a,k));
function getMaxWindow(arr,w) {
    if(arr == null || w < 1 || arr.length < w) {
        return null;
    }
    const linkedList = [];
    const res = new Array(arr.length - w + 1);
    let index = 0;

    for(let r = 0;r < arr.length;r++) {
        while (linkedList.length && linkedList[linkedList.length - 1] <= arr[r]) {
            linkedList.pop();
        }
        linkedList.push(r);
        if(linkedList[0] === r - w) {
            linkedList.shift();
        }
        if(r >= w - 1) {
            res[index++] = arr[linkedList[0]];
        }
    }
    return res;
}