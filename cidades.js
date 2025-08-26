// Nome: Blanca Ribeiro Silva
// Código: 24020

// 1.
const graph = {
  "Igarapava": {
    "Ituverava": 37,
    "Rifaina": 47,
    "Jeriquara": 41
  },
  "Ituverava": {
    "Igarapava": 37,
    "Guará": 14,
    "Jeriquara": 27
  },
  "Rifaina": {
    "Igarapava": 47,
    "Pedregulho": 28
  },
  "Pedregulho": {
    "Rifaina": 28,
    "Jeriquara": 15,
    "Cristais Paulista": 23
  },
  "Jeriquara": {
    "Igarapava": 41,
    "Ituverava": 27,
    "Ribeirão Corrente": 26,
    "Pedregulho": 15,
    "Cristais Paulista": 25
  },
  "Guará": {
    "Ituverava": 14,
    "São Joaquim da Barra": 21,
    "Ribeirão Corrente": 25
  },
  "São Joaquim da Barra": {
    "Guará": 21,
    "São José da Bela Vista": 37
  },
  "Ribeirão Corrente": {
    "Jeriquara": 26,
    "Guará": 25,
    "São José da Bela Vista": 27,
    "Franca": 34
  },
  "São José da Bela Vista": {
    "São Joaquim da Barra": 37,
    "Ribeirão Corrente": 27,
    "Franca": 33
  },
  "Cristais Paulista": {
    "Pedregulho": 23,
    "Jeriquara": 25,
    "Franca": 21,
    "Claraval": 24
  },
  "Claraval": {
    "Cristais Paulista": 24,
    "Ibiraci": 25,
    "Franca": 39
  },
  "Ibiraci": {
    "Claraval": 25,
    "Franca": 19
  },
  "Franca": {
    "Ribeirão Corrente": 34,
    "São José da Bela Vista": 33,
    "Cristais Paulista": 21,
    "Claraval": 39,
    "Ibiraci": 19,
    "Patrocínio Paulista": 19,
    "Restinga": 15,
    "Batatais": 50
  },
  "Restinga": {
    "Franca": 15,
    "Batatais": 33
  },
  "Patrocínio Paulista": {
    "Franca": 19,
    "Ibiraci": 25,
    "Itirapuã": 9,
    "Batatais": 64
  },
  "Itirapuã": {
    "Patrocínio Paulista": 9
  },
  "Batatais": {
    "Restinga": 33,
    "Patrocínio Paulista": 64,
    "Franca": 50
  }
};

// 2. Não, pois o código não permite ter duas entradas diretas entre as mesmas cidades.
//  Ele só consegue mostrar um caminho, não uma ligação dupla.

// 3.
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return "Um ou ambos os vértices não existem.";
    }

    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight: weight
    });

    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight: weight
    });
  }
  
}

// Para representar múltiplas arestas entre os mesmos vértices:
const cityGraph = new Graph();
cityGraph.addVertex("Franca");
cityGraph.addVertex("Ribeirão Corrente");
cityGraph.addVertex("São José da Bela Vista");

// Adicionando as rotas
cityGraph.addEdge("Franca", "Ribeirão Corrente", 34); // Rota direta
cityGraph.addEdge("Franca", "São José da Bela Vista", 33);
cityGraph.addEdge("São José da Bela Vista", "Ribeirão Corrente", 27);
