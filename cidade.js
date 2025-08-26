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
g.addEdge("Ribeirão Corrente", "São José da Bela Vista")

console.log('Grafo final após a adição de todas as arestas:')
console.log(g)

console.log('-'.repeat(80))

export default g

/*
2 - Você conseguiu representar as duas ligações entre Franca e Ribeirão Corrente? Por quê?

Não, não consegui representar duas ligações entre Franca e Ribeirão Corrente.
Isso acontece porque a implementação atual do grafo usa lista de adjacência com Set para armazenar os vizinhos.

O Set não permite elementos duplicados — ou seja, mesmo que eu tente adicionar duas vezes a mesma aresta entre os mesmos vértices, o grafo mantém apenas uma única conexão.

Para suportar duas ligações (multiarestas) seria necessário alterar a estrutura de dados, trocando o Set por um Array (ou outro tipo de estrutura que aceite duplicatas), de forma que cada chamada de addEdge() possa registrar uma nova ocorrência da mesma aresta.
*/


/*
3 - Proponha uma nova implementação da classe Graph que torne possível representar mais de uma aresta entre dois vértices.

import Graph from './lib/graph.class.multi.js';

const g = new Graph(false); // não direcionado

g.addVertex("Franca");
g.addVertex("Ribeirão Corrente");

/Duas arestas paralelas:
g.addEdge("Franca", "Ribeirão Corrente"); 
g.addEdge("Franca", "Ribeirão Corrente"); 

console.log(g.edgeCount("Franca", "Ribeirão Corrente"));
console.log(g.neighbors("Franca")); // mostra duas ocorrências para "Ribeirão Corrente"
*/