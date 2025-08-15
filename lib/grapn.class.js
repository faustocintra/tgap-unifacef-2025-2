export default class Graph {
    // Metodo construtor
    constructor(isDirected = false) {
        /*
           Nesta implementação, o grafo pode ser direcionado ou não, dependendo do valor
           do atributo isDirected. Vertices e Arestas serão representados por uma lista 
           de adjacência, implementado com o uso da classe Map nativo do JavaScript.
        */
       this.isDirected = isDirected
       this.vertices = new Set() // Set não permite elementos reptidos
       this.adjList = new Map()
    }

    // Metodo que adiciona um vertice ao grafo
    addVerticex(v) {
        // Adiciona o vertice ao conjunto vertices, caso ainda não exista
        if(! this.vertices.has(v)) {
            this.vertices.add(v)

            // Cria um conjunto vazio associado ao vertice na lista de adjacência
            this.adjList.set(v, new Set())
        }
    }
}