

// Create a n*n grid
function createGrid(e) {
    // If default, make it 16*16
    let n = 16
    // If createGrid is called because of a change event on the range input, make it as selected by user
    if (e) {
        n = e.target.value
    }
    // Select the grid
    const grid = document.querySelector("#grid")
    // Remove the previous grid
    grid.innerHTML = "";
    // Add row
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div")
        row.classList.add("row");
        // Inside each row, add n cells
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div")
            cell.classList.add("cell")
            row.appendChild(cell);
        }
        grid.appendChild(row);    
    }
}
// Create default grid
createGrid();

// Select the range input and listen for changes on it
const range = document.querySelector("#range")
range.addEventListener("change", createGrid)


