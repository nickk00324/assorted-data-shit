class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
    }
  }
  removeVertex(v) {
    this.adjacencyList[v].forEach((ver) => {
      this.removeEdge(ver, v);
    });
    delete this.adjacencyList[v];
  }
}

const g = new Graph();
g.addVertex("Hello");
g.addVertex("Bye");
g.addVertex("See you");
g.addEdge("Hello", "See you");
g.addEdge("Hello", "Bye");
// g.removeVertex("Hello");
console.log(g.adjacencyList);
