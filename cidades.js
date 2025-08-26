import Graph from './lib/graph.class.js'

const cidades = new Graph(false)

// Conexões entre cidades (sem considerar distâncias)
cidades.addEdge('Igarapava', 'Ituverava')
cidades.addEdge('Igarapava', 'Jeriquara')
cidades.addEdge('Ituverava', 'Jeriquara')
cidades.addEdge('Ituverava', 'Guará')
cidades.addEdge('Guará', 'São Joaquim da Barra')
cidades.addEdge('São Joaquim da Barra', 'Ribeirão Corrente')
cidades.addEdge('Jeriquara', 'Ribeirão Corrente')
cidades.addEdge('Ribeirão Corrente', 'São José da Bela Vista')
cidades.addEdge('São José da Bela Vista', 'Franca')
cidades.addEdge('Franca', 'Jeriquara')
cidades.addEdge('Franca', 'Cristais Paulista')
cidades.addEdge('Cristais Paulista', 'São José da Bela Vista')
cidades.addEdge('Cristais Paulista', 'Pedregulho')
cidades.addEdge('Pedregulho', 'Rifaina')
cidades.addEdge('Pedregulho', 'Claraval')
cidades.addEdge('Franca', 'Claraval')
cidades.addEdge('Claraval', 'Ibiraci')
cidades.addEdge('Franca', 'Ibiraci')
cidades.addEdge('Ibiraci', 'Itirapuã')
cidades.addEdge('Itirapuã', 'Patrocínio Paulista')
cidades.addEdge('Patrocínio Paulista', 'Franca')
cidades.addEdge('Franca', 'Restinga')
cidades.addEdge('Restinga', 'Batatais')
cidades.addEdge('Franca', 'Batatais')
export default cidades

/* 

2 - Não é possível representar diretamente duas ligações usando apenas listas de adjacência tradicionais.

3 - Para possibilitar essa alteração, é preciso substituir a estrutura utilizada para armazenar as conexões. Atualmente, cada vértice guarda suas arestas em um Set, o que impede a duplicação. Para suportar mais de uma ligação, esse Set deve ser trocado por um Array.

Atual: this.adjList.set(v, new Set())

Modificada: this.adjList.set(v, [])

Além disso, o método addEdge também deve ser ajustado. Hoje, ele utiliza o método .add, próprio do Set. Após a mudança para Array, será necessário usar o .push() para registrar as arestas, permitindo que o mesmo vértice apareça mais de uma vez

Atual: this.adjList.get(v).add(w)
if (!this.isDirected) this.adjList.get(w).add(v)

Modificada: this.adjList.get(v).push(w)
if (!this.isDirected) this.adjList.get(w).push(v)

Dessa forma, a classe passa a representar um multigrafo, aceitando múltiplas arestas entre dois vértices distintos.

*/