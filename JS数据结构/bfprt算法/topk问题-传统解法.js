let arr = [1,2,3,4,5,6];
console.log(process(arr,0,arr.length-1,2-1));

function process(arr,l,r,index) {
    if(l === r) {
        return arr[l];
    }
    const pivot = arr[l+Math.random()*(r-l+1)];
    const range = partition(arr,l,r,pivot);
    if(index >= range[0] && index <= range[1]) {
        return arr[index];
    }else if(index < range[0]) {
        return process(arr,l,range[0]-1,index);
    }else {
        return process(arr,range[1]+1,r,index);
    }
}

export function partition(arr,l,r,pivot) {
    let less = l - 1;
    let more = r + 1;
    let cur = l;
    while (cur < more) {
        if(arr[cur] < pivot) {
            swap(arr,++less,cur++);
        }else if(arr[cur] > pivot) {
            swap(arr,--more,cur);
        }else {
            cur++;
        }
    }
    return [less+1,more-1];
}

export function swap(arr,a,b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}