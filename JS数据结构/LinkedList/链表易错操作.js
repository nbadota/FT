import {LinkedList} from "./LinkedList.js";
const list1 = new LinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);

const list2 = new LinkedList();
list2.push(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);

//奇数中点，偶数上中点
function midOrUpMidNode(head) {
    if(head == null || head.next == null || head.next.next == null) {
        return head;
    }
    let slow = head.next;
    let fast = head.next.next;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
console.log(midOrUpMidNode(list1.getHead()));//2
console.log(midOrUpMidNode(list2.getHead()));//3

//奇数中点，偶数下中点
function midOrDownMidNode(head) {
    if(head == null || head.next == null) {
        return head;
    }
    let slow = head.next;
    let fast = head.next;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
console.log(midOrDownMidNode(list1.getHead()));//3
console.log(midOrDownMidNode(list2.getHead()));//3

//奇数中点前一个，偶数上中点前一个
function midOrUpMidPreNode(head) {
    if(head == null || head.next == null || head.next.next == null) {
        return null;
    }
    let slow = head;
    let fast = head.next.next;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
console.log(midOrUpMidPreNode(list1.getHead()));//1
console.log(midOrUpMidPreNode(list2.getHead()));//2

//奇数中点前一个，偶数下中点前一个
function midOrDownMidPreNode(head) {
    if(head == null || head.next == null) {
        return null;
    }
    if(head.next.next == null) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
console.log(midOrDownMidPreNode(list1.getHead()));//2
console.log(midOrDownMidPreNode(list2.getHead()));//2
