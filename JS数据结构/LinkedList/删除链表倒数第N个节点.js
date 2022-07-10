/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    //提前走n-1步
    while(--n) {
        fast = fast.next
    }
    //删除第一个节点
    if(!fast.next) return head.next
    //提前走n步
    fast = fast.next
    while(fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};
