import {partition} from "./topk问题-传统解法.js";
import {quickSort} from "../排序/快排.js";

let arr = [1,2,3,4,5,6];
console.log(process(arr,0,arr.length-1,2-1));

function process(arr,l,r,index) {
    if(l === r) {
        return arr[l];
    }
    const pivot = medianOfMedians(arr,l,r);
    const range = partition(arr,l,r,pivot);
    if(index >= range[0] && index <= range[1]) {
        return arr[index];
    }else if(index < range[0]) {
        return process(arr,l,range[0]-1,index);
    }else {
        return process(arr,range[1]+1,r,index);
    }
}

function medianOfMedians(arr,l,r) {
    const size = r - l + 1;
    const offset = size % 5 === 0 ? 0 : 1;
    const mArr = new Array(Math.floor(size/5) + offset);
    for (let team = 0;team < mArr.length;team++) {
        const teamFirst = l + team*5;
        mArr[team] = getMedian(arr,teamFirst,Math.min(r,teamFirst+4));
    }
    return process(mArr,0,mArr.length-1,mArr.length / 2);
}


function getMedian(arr,l,r) {
    quickSort(arr,l,r);
    return arr[(l+r)/2];
}