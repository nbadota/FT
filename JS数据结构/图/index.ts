export class Node1 {
    public value:number | string;
    public in:number = 0;
    public out:number = 0;
    public nexts:Node1[] = [];
    public edges:Edge[] = [];

    constructor(value:number | string) {
        this.value = value;
    }
}

export class Edge {
    public weight:number;
    public from:Node1;
    public to:Node1;

    constructor(weight:number,from:Node1,to:Node1) {
        this.weight = weight;
        this.from = from;
        this.to = to;
    }
}

export class Graph {
    public nodes:Map<number,Node1> = new Map<number,Node1>();
    public edges:Set<Edge> = new Set<Edge>()
}

export function createGraph(matrix:[]):Graph {
    const graph:Graph = new Graph();
    for (let i=0;i<matrix.length;i++) {
        const weight = matrix[i][0];
        const from = matrix[i][1];
        const to = matrix[i][2];

        if(!graph.nodes.has(from)) {
            graph.nodes.set(from,new Node1(from));
        }
        if(!graph.nodes.has(to)) {
            graph.nodes.set(to,new Node1(to));
        }

        let fromNode = graph.nodes.get(from);
        let toNode = graph.nodes.get(to);
        let newEdge = new Edge(weight,fromNode,toNode);
        fromNode.nexts.push(toNode);
        fromNode.out++;
        toNode.in++;
        fromNode.edges.push(newEdge);
        graph.edges.add(newEdge);
    }
    return graph;
}