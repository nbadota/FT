/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let stack = []
    let curr = head
    while(curr != null){
        stack.push(curr.val)
        curr = curr.next
    }
    while(head != null){
        if(head.val !== stack.pop()){
            return false
        }
        head = head.next
    }
    return true
};