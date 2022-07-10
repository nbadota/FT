/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let tmpHead = dummy;
    // 找到第m-1个链表节点
    for(let i = 0;i < m - 1;i++) {
        tmpHead = tmpHead.next;
    }
    // 206题解法一
    let prev = null;
    let curr = tmpHead.next;
    for(let i = 0;i <= n - m;i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 将翻转的部分链表 和 原链表拼接
    tmpHead.next.next = curr;
    tmpHead.next = prev;
    return dummy.next;
};
