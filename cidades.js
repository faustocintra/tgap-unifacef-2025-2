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