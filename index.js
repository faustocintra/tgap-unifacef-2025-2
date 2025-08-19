import Graph from "./lib/graph.class.js";

const g = new Graph(false) // false = não derecionado 

console.log(g)

g.addVerticex('A')
g.addVerticex('B')

console.log('-'.repeat(80))

console.log('Grafo após a adição de dois vértices:')
console.log(g)

console.log('-'.repeat(80))

g.addEdge('A', 'B')

console.log('Grafo após a adição da aresta A -> B:')
console.log(g)

// Criando uma aresta diretamente. O vértice C ainda não existe,
// e será craindo automaticamente antes da criação da aresta.
g.addEdge('A', 'C')

console.log('Grafo após a adição da aresta A -> C:')
console.log(g)