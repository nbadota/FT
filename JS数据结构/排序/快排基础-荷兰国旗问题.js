let arr = [2,6,7,5,5,8,9,5,2,3];
partition(arr,5);
console.log(arr);
function partition(arr, num) {
    let less = -1;
    let more = arr.length;
    let l = 0;
    while (l < more) {
        if(arr[l] < num) {
            swap(arr,++less,l++);
        }else if(arr[l] > num) {
            swap(arr,--more,l);
        }else {
            l++
        }
    }
}

function swap(arr,a,b) {
    [arr[a],arr[b]] = [arr[b],arr[a]];
}
