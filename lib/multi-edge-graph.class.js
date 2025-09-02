/*
  Reimplementação da classe Graph, usando Array em vez 
  de Set para armazenar as referências às arestas, 
  permitindo, assim, múltiplas arestas entre dois vértices
*/

export default class Graph {

  // Método construtor
  constructor(isDirected = false) {
    /*
      Nesta implementação, o grafo pode ser direcionado ou não, 
      dependendo do valor do atributo isDirected. Vértices e 
      arestas serão representados por uma lista de adjacência,
      implementada com o uso da classe Map nativa do JavaScript. 
    */
    this.isDirected = isDirected
    this.vertices = []    // Array permite elementos repetidos
    this.adjList = new Map()
  }
  // Método que adiciona um vértice ao grafo
  addVertex(v) {
    // Adiciona o vértice ao array caso ainda não exista
    if(! this.vertices.includes(v)) {
      this.vertices.push(v)

  // Implementar o restante da classe, usando o vetor em
  // this.vertices
      // Cria um array vazio associado ao vértice na lista de adjacência
      this.adjList.set(v, [])
    }
  }

  // Método que adiciona uma aresta ao grafo
  addEdge(v, w) {   // v e w são vértices
    // Se o vértice v ainda não existe, cria-o
    if(! this.vertices.includes(v)) this.addVertex(v)

    // Se o vértice w ainda não existe, cria-o
    if(! this.vertices.includes(w)) this.addVertex(w)

    // Estabelece a aresta v -> w
    this.adjList.get(v).push(w)

    // Se o grafo não for direcionado, devemos criar também a
    // aresta w -> v
    if(! this.isDirected) this.adjList.get(w).push(v)
  }

  // Método que remove um vértice do grafo
  removeVertex(v) {
    // Age apenas se o vértice existir
    if(! this.vertices.includes(v)) return

    let referenced = false

    // Verifica se o vértice que está sendo excluído está presente
    // na lista de adjacência de algum outro vértice
    for(let vtx of this.vertices) {
      if(this.adjList.get(vtx).includes(v)) {
        referenced = true
        break
      }
    }

    // Para que um vértice possa ser removido, sua lista de adjacência
    // deve estar vazia e ele não pode estar referenciado por nenhum
    // outro vértice
    if(this.adjList.get(v).length === 0 && !referenced) {

      // Remove o vértice da lista de vértices
      this.vertices = this.vertices.filter(vtx => vtx !== v)

      // Remove a entrada da lista de adjacência
      this.adjList.delete(v)
    }
    else throw new Error('ERRO: impossível excluir um vértice com arestas incidentes a ele.')
  }

  // Método que remove uma aresta do grafo
  removeEdge(v, w) {   // v e w são os vértices incidentes à aresta
    // Verifica se tanto v quanto w são vértices válidos
    if(!(this.vertices.includes(v) && this.vertices.includes(w))) return

    // Exclui uma ocorrência de w da lista de adjacência de v
    const adjV = this.adjList.get(v)
    const indexV = adjV.indexOf(w)
    if(indexV !== -1) adjV.splice(indexV, 1)

    // Se o grafo não for direcionado, precisamos excluir também
    // a aresta em sentido oposto
    if(! this.isDirected) {
      const adjW = this.adjList.get(w)
      const indexW = adjW.indexOf(v)
      if(indexW !== -1) adjW.splice(indexW, 1)
    }
  }

}
