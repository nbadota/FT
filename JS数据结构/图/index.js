export class Node1 {
    constructor(value) {
        this.in = 0;
        this.out = 0;
        this.nexts = [];
        this.edges = [];
        this.value = value;
    }
}
export class Edge {
    constructor(weight, from, to) {
        this.weight = weight;
        this.from = from;
        this.to = to;
    }
}
export class Graph {
    constructor() {
        this.nodes = new Map();
        this.edges = new Set();
    }
}
export function createGraph(matrix) {
    const graph = new Graph();
    for (let i = 0; i < matrix.length; i++) {
        const weight = matrix[i][0];
        const from = matrix[i][1];
        const to = matrix[i][2];
        if (!graph.nodes.has(from)) {
            graph.nodes.set(from, new Node1(from));
        }
        if (!graph.nodes.has(to)) {
            graph.nodes.set(to, new Node1(to));
        }
        let fromNode = graph.nodes.get(from);
        let toNode = graph.nodes.get(to);
        let newEdge = new Edge(weight, fromNode, toNode);
        fromNode.nexts.push(toNode);
        fromNode.out++;
        toNode.in++;
        fromNode.edges.push(newEdge);
        graph.edges.add(newEdge);
    }
    return graph;
}
