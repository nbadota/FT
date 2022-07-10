/*
也称优先级队列
时间复杂度 O(N*logN)
空间复杂度 O(1)
 */
let arr = [1,3,6,7,4,5,0,2,0,9,2];
heapSort(arr);
console.log(arr);
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }

  for (let i=0;i<arr.length;i++) {// O(N)
    heapInsert(arr,i);// O(logN)
  }
  /*
  for (let i = arr.length-1;i >=0;i--) {// O(N)
    heapify(arr,i,arr.length);
  }
   */
  let heapSize = arr.length;
  swap(arr,0,--heapSize);
  while (heapSize > 0) {// O(N)
    heapify(arr,0,heapSize);// O(logN)
    swap(arr,0,--heapSize);// O(1)
  }
}

function heapInsert(arr, index) {
  while(arr[index] > arr[Math.floor((index-1)/2)] && index >= 0) {
    swap(arr,index,Math.floor((index-1)/2));
    index = Math.floor((index-1)/2);
  }
}

function heapify(arr,index,heapSize) {
  let left = index*2 + 1;
  while (left < heapSize) {
    let largest = left + 1 < heapSize && arr[left+1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if(largest === index) {
      break;
    }
    swap(arr,largest,index);
    index = largest;
    left = index * 2 + 1;
  }
}

function swap(arr,a,b) {
  [arr[a],arr[b]] = [arr[b],arr[a]];
}
