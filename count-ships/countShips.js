function countShips(grid) {
    let count = 0;

    // Helper function to recursively mark connected ships as visited
    function markShip(row, col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === ".") {
            return;
        }
        grid[row][col] = ".";
        markShip(row + 1, col);
        markShip(row - 1, col);
        markShip(row, col + 1);
        markShip(row, col - 1);
    }

    // Iterate through each cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // If the cell is part of a ship, mark the entire ship and increment count
            if (grid[i][j] === "S") {
                markShip(i, j);
                count++;
            }
        }
    }

    return count;
}

module.exports = countShips;
