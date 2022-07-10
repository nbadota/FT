/*
题目：
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false
 */

//方法1：快慢指针法
var hasCycle = (head) => {
    let fast = head;
    let slow = head;
    while (fast) {
        if (fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

//方法2：哈希表法
var hasCycle = (head) => {
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;
        map.set(head, true); // 存的是节点的地址引用，而不是节点值
        head = head.next;
    }
    return false;
};

// 找到链表第一个入环的节点
export function getLoopNode(head) {
    if(head == null || head.next == null || head.next.next == null) {
        return null
    }

    let n1 = head.next;
    let n2 = head.next.next;

    while (n1 !== n2) {
        if (n2.next == null || n2.next.next == null) {
            return null;
        }
        n2 = n2.next.next;
        n1 = n1.next;
    }
    n2 = head;
    while (n1 !== n2) {
        n1 = n1.next;
        n2 = n2.next;
    }
    return n1;
}