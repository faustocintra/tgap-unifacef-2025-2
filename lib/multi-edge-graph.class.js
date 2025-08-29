/*
    Reimplementação da classe Graph, usando Array em vez
    de Set para armazenar as referêcias às arestas,
    permitindo, assim, múltiplas arestas entre dois vértices
*/

export default class MultiEdgeGraph {

    // Método construtor
    constructor(isDirected = false) {
        /*
            Nesta implementação, o grafo pode ser direcionado ou não,
            dependendo do valor do atributo isDirected. Vértices e arestas
            serão representadas por uma lista de adjacência, imeplementada
            com o uso da classe Map nativa do JavaScript.
        */
        this.isDirected = isDirected
        this.vertices = []       // Lista de vértices (pode conter repetidos se não cuidarmos)
        this.adjList = new Map() // Lista de adjacência
    }

    // Adiciona um vértice ao grafo
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.vertices.push(vertex)
            this.adjList.set(vertex, [])
        }
    }

    // Adiciona uma aresta entre dois vértices
    addEdge(v1, v2) {
        if (!this.adjList.has(v1)) {
            this.addVertex(v1)
        }
        if (!this.adjList.has(v2)) {
            this.addVertex(v2)
        }

        // Como usamos Array, podemos ter múltiplas arestas entre os mesmos vértices
        this.adjList.get(v1).push(v2)

        if (!this.isDirected) {
            this.adjList.get(v2).push(v1)
        }
    }

    // Retorna a lista de adjacência
    getAdjList() {
        return this.adjList
    }

    // Exibe o grafo no console
    printGraph() {
        for (let [vertex, edges] of this.adjList.entries()) {
            console.log(vertex + " -> " + edges.join(", "))
        }
    }
}
