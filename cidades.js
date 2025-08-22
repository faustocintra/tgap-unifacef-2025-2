import Graph from './lib/graph.class.js'

const g = new Graph(false) // false = não direcionado

// Exercício 1 - Crie uma arquivo chamado cidades.js e, nele, represente em código o grafo da figura a seguir (não se preocupe com a distância entre as cidades).

g.addVertex('Igarapava')
g.addVertex('Ituverava')
g.addVertex('Guará')
g.addVertex('São Joaquim da Barra')
g.addVertex('Jeriquara')
g.addVertex('Ribeirão Corrente')
g.addVertex('São José da Bela Vista')
g.addVertex('Rifaina')
g.addVertex('Pedregulho')
g.addVertex('Cristais Paulista')
g.addVertex('Franca')
g.addVertex('Restinga')
g.addVertex('Batatais')
g.addVertex('Claraval')
g.addVertex('Ibiraci')
g.addVertex('Patrocínio Paulista')
g.addVertex('Itirapuã')

console.log('-'.repeat(80))

console.log('Grafo após a adição dos vértices:')
console.log(g)

console.log('-'.repeat(80))

g.addEdge('Igarapava', 'Ituverava')
g.addEdge('Igarapava', 'Rifaina')
g.addEdge('Igarapava', 'Jeriquara')
g.addEdge('Ituverava', 'Jeriquara')
g.addEdge('Ituverava', 'Guará')
g.addEdge('Guará', 'Ribeirão Corrente')
g.addEdge('Guará', 'São Joaquim da Barra')
g.addEdge('São Joaquim da Barra', 'São José da Bela Vista')
g.addEdge('Jeriquara', 'Pedregulho')
g.addEdge('Jeriquara', 'Cristais Paulista')
g.addEdge('Jeriquara', 'Ribeirão Corrente')
g.addEdge('Ribeirão Corrente', 'Franca')
g.addEdge('Ribeirão Corrente', 'Franca')
g.addEdge('São José da Bela Vista', 'Franca')
g.addEdge('Rifaina', 'Pedregulho')
g.addEdge('Pedregulho', 'Cristais Paulista')
g.addEdge('Cristais Paulista', 'Franca')
g.addEdge('Franca', 'Claraval')
g.addEdge('Franca', 'Ibiraci')
g.addEdge('Franca', 'Patrocínio Paulista')
g.addEdge('Franca', 'Batatais')
g.addEdge('Franca', 'Restinga')
g.addEdge('Restinga', 'Batatais')
g.addEdge('Batatais', 'Patrocínio Paulista')
g.addEdge('Claraval', 'Ibiraci')
g.addEdge('Patrocínio Paulista', 'Itirapuã')

console.log('Grafo após a criação das arestas')
console.log(g)

/* 
    Exercício 2 - Você conseguiu representar as duas ligações entre Franca e Ribeirão Corrente? Por quê?
    
    Resposta: Não foi possível representar as duas ligações entre Franca e Ribeirão Corrente, pois no nosso código atualmente
    armazenamos os vértices em um objeto do tipo Set, e como esse tipo não permite elementos duplicados, quando tentamos adicionar
    a segunda ligação entre as cidades de Franca e Ribeirão Corrente a mesma não é armazenada.
*/


/*
    Exercício 3 - Proponha uma nova implementação da classe Graph que torne possível representar mais de uma aresta entre dois vértices.

    Resposta: Para que a classe Graph consiga representar mais de uma aresta entre dois vértices será necessário trocar o uso
    do Set por um Array na lista de arestas.

    Como está atualmente:
    this.adjList.set(v, new Set())

    Como deverá ficar:
    this.adjList.set(v, [])

    Será necessário também alterar o método addEdge, ao invés de utilizar o .add, será ncessário utilizar o .push() para que seja
    possivel inserir o vértice no array.

    Como está atualmente:
    this.adjList.get(v).add(w)
    if (!this.isDirected) this.adjList.get(w).add(v)

    Como deverá ficar:
    this.adjList.get(v).push(w)
    if (!this.isDirected) this.adjList.get(w).push(v)
*/