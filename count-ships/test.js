// Import the function
const countShips = require('./countShips');

// Define grids for testing
const grid1 = [
    [".", "S", ".", "S"],
    [".", ".", ".", "S"],
    ["S", "S", ".", "S"],
    [".", ".", ".", "S"]
];

const grid2 = [
    ["S", "S", ".", "S", "S", "S", ".", "."],
    ["S", "S", ".", "S", "S", "S", ".", "."],
    ["S", "S", ".", ".", ".", ".", "S", "S"]
];

// Test each grid
console.log("Grid 1: ", countShips(grid1)); // Expected: 3
console.log("Grid 2: ", countShips(grid2)); // Expected: 3
