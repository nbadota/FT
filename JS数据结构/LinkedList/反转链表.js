//思路：看图
var reverseList = function(head) {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};
