/*
题目：
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

思路：
标签：链表
指定 cur 指针指向头部 head
当 cur 和 cur.next 的存在为循环结束条件，当二者有一个不存在时说明链表没有去重复的必要了
当 cur.val 和 cur.next.val 相等时说明需要去重，则将 cur 的下一个指针指向下一个的下一个，这样就能达到去重复的效果
如果不相等则 cur 移动到下一个位置继续循环
时间复杂度：O(n)O(n)
 */

var deleteDuplicates = function(head) {
    var cur = head;
    while(cur && cur.next) {
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
