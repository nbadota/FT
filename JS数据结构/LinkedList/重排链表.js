/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const nodeArr = [];
    while(head) {
        const tmp = head.next;
        head.next = null;
        nodeArr.push(head);
        head = tmp;
    }
    let i = -1,j = nodeArr.length;
    while(++i < --j) {
        nodeArr[i].next = nodeArr[j];
        // 链表长度为偶数判断
        i + 1 !== j && (nodeArr[j].next = nodeArr[i+1]);
    }
    return nodeArr[0];
};

 //https://leetcode-cn.com/problems/reorder-list/solution/shuang-zhi-zhen-4xing-dai-ma-chao-98-by-mantoufan/