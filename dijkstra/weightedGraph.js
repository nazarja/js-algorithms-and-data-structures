
class WeightedGraph {
    constructor() {
        this.alist = {};
    }

    addVertex(vertex) {
        if (!this.alist[vertex]) this.alist[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.alist[v1].push({node: v2, weight });
        this.alist[v2].push({node: v1, weight });
    }
}


const graph = new WeightedGraph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 9)
graph.addEdge('A', 'C', 5)
graph.addEdge('B', 'C', 7)

console.log(
    graph
)
//      4  
//    A---B 
// 2/  2  3 \ 3
//  C --D-- E
//  \4 1|  / 1
//      F