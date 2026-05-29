const container = document.querySelector("#grid-container");
const fragment = document.createDocumentFragment();
let dimension = 29;
for(let i = 0; i < dimension; i++) {
    const gridRow = document.createElement("div");    
    fragment.appendChild(gridRow);
    for(let j = 0; j < dimension; j++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        if (dimension > 50) {
            grid.setAttribute("style", `width: ${250 / dimension}px; height: ${250  / dimension}px`)
        } else {
            grid.setAttribute("style", `width: ${300 / dimension}px; height: ${300  / dimension}px`)
        }
        gridRow.appendChild(grid);
    }
};

container.appendChild(fragment);