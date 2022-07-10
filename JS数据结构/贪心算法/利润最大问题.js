/*
给你一个启动资金w，和一个最大项目次数k。
然后，有两个数组，一个cost[]，里面记录了每个项目需要花费的资金。一个profit数组，里面记录了每个项目完成后可以获取的利润。
然后请你计算出，给你一个初始资金w，和最大项目次数k的情况下，可以获取的最大利润。每次只能做一个项目，不能同时进行几个项目。
例如：初始资金10，k=3，cost[10，20，30，40]，profit[10，20，30，40]
那么，初始资金只能够花费来进行第一个10的项目，其他项目买不起，然后，第一个项目做完，利润是10，现在手里有20，就可以进行第二个项目了，然后再累加利润，
看看能不能再解锁新项目。注意，每个项目只能做一次。
 */
import {MinHeap} from "../tree/MinHeap.js";
class Node {
    p = 0;
    c = 0;
    constructor(p,c) {
        this.p = p;
        this.c = c;
    }
}


console.log(findMaxProfit(3,10,[10,20,30,40,50],[10,20,30,40,50]));
function findMaxProfit(k,w,profit,cost) {
    const nodes = [];
    for (let i = 0;i <profit.length;i++){
        nodes[i] = new Node(profit[i],cost[i]);
    }
    let min = new MinHeap((node1,node2)=>node1.c - node2.c);
    let max = new MinHeap((node1,node2)=>node2.p - node1.p);
    for (let i=0;i<nodes.length;i++) {
        min.insert(nodes[i]);
    }
    for (let i=0;i < k;i++) {
        while (!min.isEmpty()&&w>=min.findMinimum().c) {
            max.insert(min.extract());
        }
        if(max.isEmpty()) {
            return w;
        }
        w += max.extract().p;
    }
    return w;
}