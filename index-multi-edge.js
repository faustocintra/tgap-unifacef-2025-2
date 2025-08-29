import MultiEdgeGraph from './lib/multi-edge-graph.class.js'

const g = new MultiEdgeGraph(false)  // false = não direcionado

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
g.addEdge("Franca", "Ribeirão Corrente") // aqui pode repetir agora
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

g.printGraph()

export default g
