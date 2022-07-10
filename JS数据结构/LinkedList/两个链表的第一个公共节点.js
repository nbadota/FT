/*
#题目
输入两个无环链表，找出它们的第一个公共结点。

#思路
1.先找到两个链表的长度length1、length2

2.让长一点的链表先走length2-length1步，让长链表和短链表起点相同

3.两个链表一起前进，比较获得第一个相等的节点

时间复杂度O(length1+length2) 空间复杂度O(0)
 */
import {getLoopNode} from "./环形链表问题";
function getIntersectNode(head1,head2) {
    if(head1 == null || head2 == null) {
        return null;
    }
    let loop1 = getLoopNode(head1);
    let loop2 = getLoopNode(head2);
    if (loop1 == null && loop2 == null) {
        return noLoop(head1,head2);
    }
    if(loop1 != null && loop2 != null) {
        return bothLoop(head1,loop1,head2,loop2);
    }
    return null;
}

function noLoop(head1, head2) {
    if(head1 == null || head2 == null) {
        return null;
    }
    let cur1 = head1;
    let cur2 = head2;
    let n = 0;
    while (cur1) {
        n++;
        cur1 = cur1.next;
    }
    while (cur2) {
        n--;
        cur2 = cur2.next;
    }
    if(cur1 !== cur2) {
        return null;
    }
    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 === head1 ? head2 : head1;
    n = Math.abs(n);
    while (n !== 0) {
        n--;
        cur1 = cur1.next;
    }
    while (cur1 !== cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }

    return cur1;
}

// 两个有环链表
function bothLoop(head1,loop1,head2,loop2) {
    let cur1 = null;
    let cur2 = null;
    if(loop1 === loop2) {
        cur1 = head1;
        cur2 = head2;
        let n = 0;
        while (cur1 !== loop1) {
            n++;
            cur1 = cur1.next;
        }
        while (cur2 !== loop2) {
            n--;
            cur2 = cur2.next;
        }
        if(cur1 !== cur2) {
            return null;
        }
        cur1 = n > 0 ? head1 : head2;
        cur2 = cur1 === head1 ? head2 : head1;
        n = Math.abs(n);
        while (n !== 0) {
            n--;
            cur1 = cur1.next;
        }
        while (cur1 !== cur2) {
            cur1 = cur1.next;
            cur2 = cur2.next;
        }

        return cur1;
    }else {
        cur1 = loop1.next;
        while (cur1 !== loop1) {
            if(cur1 === loop2) {
                return loop1;
            }
            cur1 = cur1.next;
        }
        return null;
    }
}
