import {createGraph} from "./index.js";
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
console.log(dijkstra(graph.nodes.get('a')));

function dijkstra(from) {
    const distanceMap = new Map();
    distanceMap.set(from,0);
    const selectedNodes = new Set();
    let minNode = getMinDistanceAndUnselectedNode(distanceMap,selectedNodes);
    while (minNode != null) {
        const distance = distanceMap.get(minNode);
        for(const edge of minNode.edges) {
            const toNode = edge.to;
            if(!distanceMap.has(toNode)) {
                distanceMap.set(toNode,distance + edge.weight);
            }else {
                distanceMap.set(toNode,Math.min(distanceMap.get(toNode),distance+edge.weight));
            }
        }
        selectedNodes.add(minNode);
        minNode = getMinDistanceAndUnselectedNode(distanceMap,selectedNodes);
    }
    return distanceMap;
}

function getMinDistanceAndUnselectedNode(distanceMap,touchedNodes) {
    let minNode = null;
    let minDistance = Infinity;
    for (const [node,distance] of distanceMap.entries()) {
        if(!touchedNodes.has(node) && distance < minDistance) {
            minNode = node;
            minDistance = distance;
        }
    }
    return minNode;
}