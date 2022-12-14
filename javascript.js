

// Create a n*n grid
function createGrid(e) {
    // If default, make it 16*16
    let n = 16
    // If createGrid is called because of a change event on the range input, make it as selected by user
    if (e) {
        n = e.target.value
    }
    // Change the value of n*n rendered under the input
    const p = document.querySelector("#p");
    p.textContent = `${n}x${n}`
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
            cell.style.backgroundColor = "white";
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

// Toggle grid lines
const toggle = document.querySelector("#toggle-grid");
toggle.addEventListener("click", toggleGrid)

function toggleGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.toggle("cell-border");
    })
}
// Paint cell when click on it
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function paintCell(e) {
    if (e.type == "mouseover" && !mouseDown) return
    // Paint in black
    if (e.target.style.backgroundColor === "white") {
        e.target.style.backgroundColor = "black";
    }
}

// Add functionality to clear button
function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);
// TODO: Add rainbow color option
