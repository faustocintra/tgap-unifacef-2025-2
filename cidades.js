import Graph from './lib/graph.class.js'

const g = new Graph(false)  // false = não direcionado

console.log(g)

console.log('-'.repeat(80))

// Adicionando todos os vértices (cidades) do grafo
g.addVertex("Igarapava")
g.addVertex("Ituverava")
g.addVertex("Guará")
g.addVertex("São Joaquim da Barra")
g.addVertex("São José da Bela Vista")
g.addVertex("Ribeirão Corrente")
g.addVertex("Jeriquara")
g.addVertex("Pedregulho")
g.addVertex("Rifaina")
g.addVertex("Cristais Paulista")
g.addVertex("Franca")
g.addVertex("Restinga")
g.addVertex("Batatais")
g.addVertex("Patrocínio Paulista")
g.addVertex("Itirapuã")
g.addVertex("Claraval")
g.addVertex("Ibiraci")

console.log('Grafo após a adição de todos os vértices (cidades):')
console.log(g)

console.log('-'.repeat(80))

// Agora adicionando as arestas conforme o grafo da imagem
g.addEdge("Igarapava", "Ituverava")
g.addEdge("Igarapava", "Jeriquara")
g.addEdge("Igarapava", "Rifaina")
g.addEdge("Ituverava", "Guará")
g.addEdge("Ituverava", "Jeriquara")
g.addEdge("Guará", "São Joaquim da Barra")
g.addEdge("Guará", "Ribeirão Corrente")
g.addEdge("São Joaquim da Barra", "São José da Bela Vista")
g.addEdge("São José da Bela Vista", "Franca")
g.addEdge("Jeriquara", "Ribeirão Corrente")
g.addEdge("Jeriquara", "Pedregulho")
g.addEdge("Jeriquara", "Cristais Paulista")
g.addEdge("Ribeirão Corrente", "Franca")
g.addEdge("Pedregulho", "Rifaina")
g.addEdge("Pedregulho", "Cristais Paulista")
g.addEdge("Cristais Paulista", "Franca")
g.addEdge("Franca", "Restinga")
g.addEdge("Franca", "Batatais")
g.addEdge("Franca", "Patrocínio Paulista")
g.addEdge("Franca", "Claraval")
g.addEdge("Franca", "Ibiraci")
g.addEdge("Restinga", "Batatais")
g.addEdge("Patrocínio Paulista", "Itirapuã")
g.addEdge("Patrocínio Paulista", "Batatais")
g.addEdge("Claraval", "Ibiraci")

console.log('Grafo final após a adição de todas as arestas:')
console.log(g)

console.log('-'.repeat(80))

export default g

/*
2 - Você conseguiu representar as duas ligações entre Franca e Ribeirão Corrente? Por quê?

Não, não foi possível representar duas ligações entre Franca e Ribeirão Corrente,
pois a lista de adjacência usa Set, que não permite elementos duplicados. Assim,
o grafo só registra uma única aresta entre os dois vértices.

*/


/*
3 - Proponha uma nova implementação da classe Graph que torne possível representar mais de uma aresta entre dois vértices.

Para permitir mais de uma aresta entre dois vértices (multiarestas),
podemos modificar a implementação da classe Graph trocando o uso
de Set por Array na lista de adjacência.

Assim, em vez de armazenar cada vizinho apenas uma vez, será possível
registrar múltiplas ocorrências do mesmo vértice, representando várias
ligações entre as mesmas cidades.

Exemplo de mudança:

- Antes:
this.adjList = new Map()
this.adjList.set(v, new Set())

- Depois:
this.adjList = new Map()
this.adjList.set(v, [])

E no método addEdge, em vez de usar .add(), usamos .push() para
inserir o vértice no array.

Dessa forma, se chamarmos addEdge("Franca", "Ribeirão Corrente")
duas vezes, o grafo vai registrar as duas conexões separadamente. 
*/
