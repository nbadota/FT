import {UnionFind} from "../并查集/index.js";
import {createGraph} from "./index.js";
import {MinHeap} from "../tree/MinHeap.js";

const matrix = [
    [1,'a','b'],
    [2,'b','c'],
    [3,'b','g'],
    [4,'c','d'],
    [5,'c','e'],
    [6,'d','f'],
    [7,'e','f'],
    [8,'e','g']
];
const graph = createGraph(matrix);

//克鲁斯卡尔算法
//console.log(kruskalMST(graph));
function kruskalMST(graph) {
    const unionFind = new UnionFind(graph.nodes.values());
    const queue = [];
    for (const edge of graph.edges) {
        queue.push(edge);
    }
    queue.sort((a,b)=>a.weight - b.weight);
    const result = new Set();
    while (queue.length) {
        const edge = queue.shift();
        if(!unionFind.isSameSet(edge.from,edge.to)) {
            result.add(edge);
            unionFind.union(edge.from,edge.to);
        }
    }
    return result;
}

//普利姆算法
console.log(primMST(graph.nodes.get('a')));
function primMST(node) {
    const priorityQueue = new MinHeap((a,b)=>a.weight - b.weight);
    const nodeSet = new Set();
    const res = new Set();

    if(!nodeSet.has(node)) {
        nodeSet.add(node);
        for (const edge of node.edges) {
            priorityQueue.insert(edge);
        }
        while (!priorityQueue.isEmpty()) {
            const edge = priorityQueue.extract();
            const toNode = edge.to;
            if(!nodeSet.has(toNode)) {
                nodeSet.add(toNode);
                res.add(edge);
                for (const nextEdge of toNode.edges) {
                    priorityQueue.insert(nextEdge);
                }
            }
        }
    }
    return res;
}