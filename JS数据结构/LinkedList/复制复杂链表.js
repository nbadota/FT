/*
leetcode 138
 */

var copyRandomList = function (head) {
    if (!head) return head;

    let cur = head;
    const map = new Map();
    // 第一次遍历，生成一个具有val属性的链表；
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    //第二次遍历，根据map映射关系，将random和next指针指向对应的节点或者null;
    cur = head
    while (cur) {
        map.get(cur).next = map.get(cur.next) || null
        map.get(cur).random = map.get(cur.random) || null
        cur = cur.next
    }
    return map.get(head);
};

// 不借助map的解法
function copyRandomList(head) {
    if(head == null) {
        return null;
    }
    let cur = head;
    let next = null;
    //构造 1 -> 1' -> 2 -> 2'
    while (cur != null) {
        next = cur.next;
        cur.next = new Node(cur.value);
        cur.next.next = next;
        cur = next;
    }
    cur = head;
    let curCopy = null;
    // 将克隆节点链接random节点
    while (cur != null) {
        next = cur.next.next;
        curCopy = cur.next;
        curCopy.rand = cur.rand != null ? cur.rand.next : null;
        cur = next;
    }

    //分离克隆部分
    let res = head.next;
    cur = head;
    while (cur != null) {
        next = cur.next.next;
        curCopy = cur.next;
        cur.next = next;
        curCopy.next = next != null ? next.next : null;
        cur = next;
    }

    return res;
}