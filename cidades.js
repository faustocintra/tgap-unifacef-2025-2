//1) Crie uma arquivo chamado cidades.js e, nele, 
// represente em código o grafo da figura a seguir 
// (não se preocupe com a distância entre as cidades).
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    printGraph() {
        for (let [vertex, edges] of this.adjList.entries()) {
            console.log(vertex + " -> " + edges.join(", "));
        }
    }
}

const cidades = new Graph();

const nomes = [
    "Igarapava", "Ituverara", "Guará", "São Joaquim da Barra", "Jeriquara", "Ribeirão Corrente",
    "São José da Bela Vista", "Restinga", "Batatais", "Rifaina", "Pedregulho", "Cristais Paulista",
    "Franca", "Claraval", "Ibiraci", "Patrocínio Paulista", "Itirapuã"
];

nomes.forEach(cidade => cidades.addVertex(cidade));

cidades.addEdge("Igarapava", "Ituverara");
cidades.addEdge("Igarapava", "Jeriquara");
cidades.addEdge("Igarapava", "Rifaina");

cidades.addEdge("Ituverara", "Guará");
cidades.addEdge("Ituverara", "Jeriquara");

cidades.addEdge("Guará", "São Joaquim da Barra");

cidades.addEdge("São Joaquim da Barra", "Ribeirão Corrente");

cidades.addEdge("Jeriquara", "Ribeirão Corrente");
cidades.addEdge("Jeriquara", "Pedregulho");

cidades.addEdge("Ribeirão Corrente", "São José da bela Vista");
cidades.addEdge("Ribeirão Corrente", "Franca");

cidades.addEdge("São José da Bela Vista", "Restinga");
cidades.addEdge("São José da Bela Vista", "Franca");

cidades.addEdge("Restinga", "Batatais");
cidades.addEdge("Restinga", "Franca");

cidades.addEdge("Batatais", "Franca");
cidades.addEdge("Batatais", "Patrocínio Paulista");

cidades.addEdge("Rifaina", "Pedregulho");

cidades.addEdge("Pedregulho", "Cristais Paulista");

cidades.addEdge("Cristais Paulista", "Franca");
cidades.addEdge("Cristais Paulista", "Claraval");

cidades.addEdge("Claraval", "Ibiraci");

cidades.addEdge("Ibiraci", "Patrocínio Paulista");

cidades.addEdge("Patrocínio Paulista", "Itirapuã");
cidades.addEdge("Patrocínio Paulista", "Franca");

cidades.addEdge("Itirapuã", "Franca");

cidades.printGraph();


//2) Você conseguiu representar as duas ligações entre Franca e Ribeirão Corrente? Por quê?
//Não, porque a implementação com lista de adjacência tradicional só permite uma aresta
//entre dois vértices. Se adicionarmos novamente a mesma ligação, ela seria redundante
// e não diferenciaria as duas estradas entra as duas cidades.

//3) Proponha uma nova implementação da classe Graph que torne possível 
// representar mais de uma aresta entre dois vértices.

class GraphMulti {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(v1, v2, info = null) { 
        this.adjList.get(v1).push({destino: v2, info});
        this.adjList.get(v2).push({destino: v1, info});
    }

    printGraph() {
        for (let [vertex, edges] of this.adjList.entries()) {
            let connections = edges.map(e => e.destino + (e.info ? ` (#{e.info})` : ""));
            console.log(vertex + " -> " + connections.join(", "));
        }
    }
}

const g = new GraphMulti();
g.addVertex("Franca");
g.addVertex("Ribeirão Corrente");

g.addEdge("Franca", "Ribeirão Corrente", "Estrada A");
g.addEdge("Franca", "Ribeirão Corrente", "Estrada B");

g.printGraph();