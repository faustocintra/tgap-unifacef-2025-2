export default class MultiEdgeGraph  {

    // Método construtor
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = new Set()
        this.adjList = new Map() // Agora, os valores serão arrays
    }

    // Adiciona um vértice ao grafo
    addVertex(v) {
        if (!this.vertices.has(v)) {
            this.vertices.add(v)
            this.adjList.set(v, []) // Substituído Set por Array
        }
    }

    // Adiciona uma aresta ao grafo
    addEdge(v, w) {
        if (!this.vertices.has(v)) this.addVertex(v)
        if (!this.vertices.has(w)) this.addVertex(w)

        // Agora usamos push em vez de add
        this.adjList.get(v).push(w)

        if (!this.isDirected) {
            this.adjList.get(w).push(v)
        }
    }

    // Remove um vértice do grafo
    removeVertex(v) {
        if (!this.vertices.has(v)) return

        let referenced = false

        // Verifica se o vértice está presente nas listas de adjacência de outros vértices
        for (let [key, neighbors] of this.adjList.entries()) {
            if (neighbors.includes(v)) {
                referenced = true
                break
            }
        }

        // Verifica se o vértice pode ser removido
        if (this.adjList.get(v).length === 0 && !referenced) {
            this.vertices.delete(v)
            this.adjList.delete(v)
        } else {
            throw new Error('ERRO: impossível excluir um vértice com arestas incidentes a ele.')
        }
    }

    // Remove uma aresta do grafo
    removeEdge(v, w) {
        if (!(this.vertices.has(v) && this.vertices.has(w))) return

        // Remove uma ocorrência de w da lista de v
        let vAdj = this.adjList.get(v)
        let index = vAdj.indexOf(w)
        if (index > -1) vAdj.splice(index, 1)

        if (!this.isDirected) {
            let wAdj = this.adjList.get(w)
            let index2 = wAdj.indexOf(v)
            if (index2 > -1) wAdj.splice(index2, 1)
        }
    }
}
