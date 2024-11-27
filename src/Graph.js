// Node structure
class Node {
    constructor(coordinates, location) {
        this.coordinates = coordinates; // { x: Number, y: Number }
        this.location = location; // Array of monument names
    }
}
 
// Graph structure
class Graph {
    constructor() {
        this.nodes = new Map(); // Stores nodes with unique identifiers
        this.adjacencyList = new Map(); // Stores edges between nodes
 
        // Add nodes
        this.addNode('golconda5', { x: 0, y: 1 }, ['golconda 5', 'pavan']);
        this.addNode('golconda4', { x: 1, y: 1 }, ['golconda 4']);
        this.addNode('snigdha', { x: 1, y: 2 }, ['snigdha']);
        this.addNode('shergarh', { x: 2, y: 2 }, ['shergarh fort']);
        this.addNode('golconda3', { x: 3, y: 1 }, ['golconda 3']);
        this.addNode('red', { x: 3, y: 2 }, ['red fort']);
        this.addNode('amber', { x: 4, y: 2 }, ['amber fort']);
        this.addNode('golconda1', { x: 5, y: 1 }, ['golconda 1']);
        this.addNode('store', { x: 6, y: 1 }, ['store']);
        this.addNode('agra', { x: 6, y: 2 }, ['agra fort', 'mothers room']);
        this.addNode('nalanda', { x: 7, y: 2 }, ['nalanda']);
        this.addNode('southwingexit', { x: 8, y: 1 }, ['south wing exit']);
        this.addNode('cafeteria', { x: 9, y: 1 }, ['cafeteria']);
        this.addNode('reception', { x: 9, y: 2 }, ['reception']);
        this.addNode('northwingexit', { x: 10, y: 1 }, ['north wing exit']);
        this.addNode('secondarynorthwingexit', { x: 10, y: 2 }, ['secondary north wing exit']);
        this.addNode('hampi1', { x: 11, y: 1 }, ['hampi 1']);
        this.addNode('pantry', { x: 11, y: 2 }, ['pantry']);
        this.addNode('hampi2', { x: 12, y: 1 }, ['hampi 2']);
        this.addNode('mysorepalace', { x: 13, y: 2 }, ['mysore palace', 'lake palace']);
        this.addNode('northwingdesk', { x: 14, y: 2 }, ['north wing desk']);
        this.addNode('charminar1', { x: 14, y: 1 }, ['charminar 1']);

        this.addNode('charminar2', { x: 14, y: 0.5 }, ['charminar 2']);
        this.addNode('charminar3', { x: 14, y: 0 }, ['charminar 3']);
        this.addNode('ellora', { x: 14, y: -1 }, ['ellora']);
        this.addNode('salargunj1', { x: 15, y: 2 }, ['salargunj 1', 'salargunj 2']);
        this.addNode('ajantha', { x: 15, y: 1 }, ['ajantha', 'gingee 1']);
        this.addNode('charminar4', { x: 15, y: 0 }, ['charminar 4', 'charminar 10']);
        this.addNode('gingee2', { x: 16, y: 1 }, ['gingee 2']);
        this.addNode('charminar5', { x: 16, y: 0 }, ['charminar 5', 'charminar 9']);
        this.addNode('salargunj3', { x: 17, y: 2 }, ['salargunj 3']);
        this.addNode('gingee3', { x: 17, y: 1 }, ['gingee 3', 'northeast lab 2']);
        this.addNode('charminar8', { x: 17, y: 0 }, ['charminar 8']);
        this.addNode('salargunj4', { x: 18, y: 2 }, ['salargunj 4']);
        this.addNode('salargunj5', { x: 18, y: 1.5 }, ['salargunj 5']);
        this.addNode('gingee4', { x: 18, y: 1 }, ['gingee 4']);
        this.addNode('charminar6', { x: 18, y: 0 }, ['charminar 6', 'charminar 7']);
        this.addNode('hawa', { x: 18, y: -1 }, ['hawa mahal']);
         
        // Add edges
        this.addEdge('golconda5', 'golconda4');
        this.addEdge('golconda4', 'snigdha');
        this.addEdge('golconda4', 'golconda3');
        this.addEdge('snigdha', 'shergarh');
        this.addEdge('shergarh', 'red');
        this.addEdge('golconda3', 'red');
        this.addEdge('golconda3', 'golconda1');
        this.addEdge('red', 'amber');
        this.addEdge('amber', 'agra');
        this.addEdge('golconda1', 'store');
        this.addEdge('store', 'agra');
        this.addEdge('store', 'southwingexit');
        this.addEdge('agra', 'nalanda');
        this.addEdge('nalanda', 'reception');
        this.addEdge('reception', 'secondarynorthwingexit');
        this.addEdge('southwingexit', 'cafeteria');
        this.addEdge('cafeteria', 'northwingexit');
        this.addEdge('northwingexit', 'hampi1');
        this.addEdge('hampi1', 'hampi2');
        this.addEdge('hampi2', 'charminar1');
        this.addEdge('secondarynorthwingexit', 'pantry');
        this.addEdge('pantry', 'mysorepalace');
        this.addEdge('mysorepalace', 'northwingdesk');
        this.addEdge('charminar1', 'northwingdesk');
        
        this.addEdge('northwingdesk', 'salargunj1');
        this.addEdge('salargunj1', 'salargunj3');
        this.addEdge('salargunj3', 'salargunj4');
        this.addEdge('salargunj4', 'salargunj5');
        this.addEdge('salargunj5', 'gingee4');
        this.addEdge('charminar1', 'ajantha');
        this.addEdge('gingee2', 'ajantha');
        this.addEdge('gingee2', 'gingee3');
        this.addEdge('gingee2', 'gingee4');
        this.addEdge('charminar1', 'charminar2');
        this.addEdge('charminar2', 'charminar3');
        this.addEdge('gingee4', 'charminar6');
        this.addEdge('charminar3', 'charminar4');
        this.addEdge('charminar5', 'charminar4');
        this.addEdge('charminar5', 'charminar8');
        this.addEdge('charminar8', 'charminar6');
        this.addEdge('charminar3', 'ellora');
        this.addEdge('charminar6', 'hawa');
        this.addEdge('ellora', 'hawa');



    }
 
    addNode(id, coordinates, location) {
        const node = new Node(coordinates, location);
        this.nodes.set(id, node);
        this.adjacencyList.set(id, []);
    }
 
    addEdge(id1, id2) {
        this.adjacencyList.get(id1).push(id2);
        this.adjacencyList.get(id2).push(id1); // Assuming an undirected graph
    }
 
    getNode(id) {
        return this.nodes.get(id);
    }
 
    getNeighbors(id) {
        return this.adjacencyList.get(id);
    }
 
    findNodeByLocation(locationName) {
        for (const [id, node] of this.nodes.entries()) {
            if (node.location.includes(locationName)) {
                return id;
            }
        }
        return null;
    }
 
    findShortestPath(startLocation, endLocation) {
        const startId = this.findNodeByLocation(startLocation);
        const endId = this.findNodeByLocation(endLocation);
       
        if (!startId || !endId) {
            console.error(`Invalid start or end location: ${startLocation}, ${endLocation}`);
            return null;
        }
 
        const queue = [[startId]];
        const visited = new Set();
 
        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];
 
            if (node === endId) {
                return path;
            }
 
            if (!visited.has(node)) {
                visited.add(node);
 
                const neighbors = this.getNeighbors(node);
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        const newPath = [...path, neighbor];
                        queue.push(newPath);
                    }
                }
            }
        }
 
        console.warn(`No path found between ${startLocation} and ${endLocation}`);
        return null;
    }
 
    getDirections(path) {
        if (!path || path.length < 2) return [];
 
        const directions = [];
        let lastDirection = null;
        let strai

        for (let i = 0; i < path.length - 1; i++) {
            const currentNode = this.getNode(path[i]);
            const nextNode = this.getNode(path[i + 1]);
 
            const currentCoordinates = currentNode.coordinates;
            const nextCoordinates = nextNode.coordinates;
 
            if (i === 0) {
                const nextLocation = "Start moving in the direction of " + nextNode.location[0];
                directions.push(nextLocation);
                lastDirection = "straight";
            }else {
                const prevNode = this.getNode(path[i - 1]);
                const prevCoordinates = prevNode.coordinates;
 
                const direction = this.getDirection(prevCoordinates, currentCoordinates, nextCoordinates);
                                
                if (direction !== "straight" || lastDirection !== "straight") {
                    let nextLocation = null;
                    if (lastDirection === "straight"){
                        nextLocation = "Keep going " + lastDirection + " till " + currentNode.location[0];
                        directions.push(nextLocation);
                    }
                    if(direction === "left" || direction === "right"){
                        nextLocation = "Turn " + direction + " at " + currentNode.location[0];
                        directions.push(nextLocation);
                    }
                }
                lastDirection = direction;            
            }
            
            if (i === path.length - 2){
                const nextLocation = "Go straight and you will reach " + nextNode.location[0];
                directions.push(nextLocation);
                lastDirection = "straight";
            }
            
        }
 
        return directions;
    }
 
    getDirection(prev, current, next) {
        const vector1 = { x: current.x - prev.x, y: current.y - prev.y };
        const vector2 = { x: next.x - current.x, y: next.y - current.y };
 
        const crossProduct = vector1.x * vector2.y - vector1.y * vector2.x;
 
        if (crossProduct > 0) {
            return "left";
        } else if (crossProduct < 0) {
            return "right";
        } else {
            return "straight";
        }
    }
}

module.exports = {
    Graph
};