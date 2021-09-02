// implementation of graphs in JavaScript

class Graph {
	constructor(numOfVertices) {
		this.numOfVertices = numOfVertices;
		this.AdjList = new Map();
	}
	// adds a vertex to the graph
	addVertex(v) {
		this.AdjList.set(v, []);
	}
	// adds an edge between the source and a destination
	addEdge(v, w) {
		this.AdjList.get(v).push(w);
		this.AdjList.get(w).push(v);
	}
	// prints the vertex and adjacency list of the graph
	printGraph() {
		let getKeys = this.AdjList.keys();

		for (let i of getKeys) {
			let getValues = this.AdjList.get(i);
			let adjList = "";

			for (let j of getValues) {
				adjList += j + " ";
			}
			console.log(i + " ->" + adjList);
		}
	}
}

// breadth first search implementation
function bfs(startingNode) {
	let visited = [];
	let q = new Queue();
	visited[startingNode] = true;
	q.enqueue(startingNode);

	while (!q.isEmpty()) {
		let getQueueElement = q.dequeue();
		console.log(getQueueElement);
		let getList = this.AdjList.get(getQueueElement);

		for (let i in getList) {
			let neighbor = getList[i];

			if (!visited[neighbor]) {
				visited[neighbor] = true;
				q.enqueue(neighbor);
			}
		}
	}

}

// depth first search implementation
function dfs(startingNode) {
	let visited = [];
	this.DFSUtil(startingNode, visited);
}

// helper function which recursively acts on all adjacent vertices of vertex is it called on
function DFSUtil(vert, visited) {
	visited[vert] = true;
	console.log(vert);
	let getNeighbors = this.AdjList.get(vert);

	for (let i in getNeighbors) {
		let getElement = getNeighbors[i];
		if (!visited[getElement] {
			this.DFSUtil(getElement, visited);
		})
	}
}

// queue class utilized for BFS

class Queue {
	constructor() {
		this.items = [];
	}
	// add an element to the queue
	enqueue(element) {
		this.items.push(element);
	}
	// remove an element from the queue
	dequeue() {
		if (this.isEmpty()) {
			return "The queue is empty";
		}
		return this.items.shift();
	}
	// returns the front of the queue
	front() {
		if (this.isEmpty()) {
			return "No elements in the queue."
		}
		return this.items[0];
	}
	// check if queue is empty
	isEmpty() {
		return this.items.length == 0;
	}
	// prints out the queue
	printQueue() {
		let printedQueue = "";

		for (let i = 0; i < this.items.length; i++) {
			printedQueue += this.items[i] + " ";
		}
		return printedQueue;
	}
}