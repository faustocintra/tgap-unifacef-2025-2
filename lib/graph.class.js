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
        if (!this.vertices.has(v)) {
            this.vertices.add(v)

            // Cria um conjunto vazio associado ao vertice na lista de adjacência
            this.adjList.set(v, new Set())
        }
    }

    // Metodo que adiciona uma aresta ao grafo
    addEdge(v, w) { // v e w são vertices
        // Se a vértice v ainda não existe, cira-o
        if (! this.vertices.has(v)) this.addVerticex(v)

        // Se a vértice W ainda não existe, crio-o
        if (! this.vertices.has(w)) this.addVerticex(w)

        // Estabelece a aresta v -> w
        this.adjList.get(v).add(w)

        // Se o grafo não for direcionado, devemos criar tambem a aresta w -> v
        if(! this.isDirected) this.adjList.get(w).add(v)
    }

    // Método que remove um vértice do grafo
    removeVertex(v) {
        //Age apenas se a vértice existir
        if (! this.vertices.has(v)) return

        let referenced = false

        // Verifica se a vértice que está sendo excluída está presente na lista 
        // de adjacência de algum outro vértice
        for(let vtx of this.vertices) {
            if(this.adjList(vtx).has(v)) {
                referenced = true
                break
            }
        }

        //Para que um vértice possa ser removido, sua lista de adjacência deve estar
        // vazia e ele não pode estar referenciado por nenhum outro vértice
        if(this.adjList.get(v).size == 0 && !referenced) {

            // Remove o vértice da lista de vértices
            this.vertices.delete(v)

            // Remove a entrada da lista de adjacência
            this.adjList.delete(v)
        }
        else throw new Exception('ERRO: impossível excluir um vértice com arestas incidentes a ele.')
    }

    // Método que remove uma aresta do grafo
    removeEdge(v, w) { // V e W são os vertices incedentes á aresta
        // Verifica se tanto V quanto W são vértices válidos
        if(! (this.vertices.has(v) && this.vertices.has(w))) return

        // Excluir W da lista de adjância de V
        this.adjList.get(v).delete(w)

        // Se grafo não for derecionado, precisamos excluir também a aresta em sentido oposto
        if(! this.isDirected) this.adjList.get(w).delete(v)
    }
}