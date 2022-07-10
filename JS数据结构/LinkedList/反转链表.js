//思路：看图

var reverseList = function(head) {
    let prev = null;
    let next = null;
    while (head) {
        next = head.next;
        head.next = prev;
        //head.last = next; 双向链表
        prev = head;
        head = next;
    }
    return prev;
};
