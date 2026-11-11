let graph = [
    [0,1,0,0,1,0],
    [0,0,0,0,1,0],
    [0,1,0,0,0,1],
    [0,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,0,0,0,0,0]
];

let start = 0;
let end = 5;
let visited = [start];
let found = false;

while (visited.length > 0) {
    let node = visited.pop();

    if (node === end) {
        found = true;
        break;
    }

    for (let i = 0; i < graph.length; i++) {
        if (graph[node][i] === 1 && !visited.includes(i)) {
            visited.push(i);
        }
    }
}

console.log(found);
