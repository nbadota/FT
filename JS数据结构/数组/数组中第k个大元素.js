/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let heapSize=nums.length
    buildMaxHeap(nums,heapSize) // 构建好了一个大顶堆
    // 进行下沉 大顶堆是最大元素下沉到末尾
    for(let i=nums.length-1;i>=nums.length-k+1;i--){
        swap(nums,0,i)
        --heapSize // 下沉后的元素不参与到大顶堆的调整
        // 重新调整大顶堆
         maxHeapify(nums, 0, heapSize);
    }
    return nums[0]

   function buildMaxHeap(nums,heapSize){
     for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
        maxHeapify(nums,i,heapSize)
     }
   }
    function maxHeapify (nums,i,heapSize) {
        const l = i*2 + 1;
        const r = i*2 + 2;
        let largest = i;
        if(l < heapSize && nums[l] > nums[largest]) {
            largest = l;
        }if(r < heapSize && nums[r] > nums[largest]) {
            largest = r;
        }
        if(largest !== i) {
            swap(nums,largest,i);
            maxHeapify(nums,largest,heapSize);
        }
    }

    function swap (nums,i,j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};