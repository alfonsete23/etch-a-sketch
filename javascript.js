

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
            cell.classList.add("cell", "cell-border")
            cell.addEventListener("mouseover", paintCell);
            cell.addEventListener("mousedown", paintCell);
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

// TODO: Toggle grid lines
// TODO: Paint cell when click on it
// Paint the cell in black
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function paintCell(e) {
    if (e.type == "mouseover" && !mouseDown) return
    console.log(e);
    // Paint in black
    e.target.style.backgroundColor = "black";
}

// TODO: Add functionality to clear button
function clearGrid(e) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);
// TODO: Add rainbow color option
