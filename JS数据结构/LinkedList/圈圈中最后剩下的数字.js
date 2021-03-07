/*
解法:用链表模拟环

用链表模拟一个环

模拟游戏场景

记录头节点的前一个节点current，以保证我们找到的要删除的节点是current.next

每次循环m次找到目标节点删除，直到链表只剩下一个节点

时间复杂度O(m*n) 空间复杂度O(n)
 */

function LastRemaining_Solution(n, m) {
    if (n < 1 || m < 1) {
        return -1;
    }
    const head = { val: 0 }
    let current = head;
    for (let i = 1; i < n; i++) {
        current.next = { val: i }
        current = current.next;
    }
    current.next = head;

    while (current.next !== current) {
        for (let i = 0; i < m - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    return current.val;
}