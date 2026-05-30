const container = document.querySelector("#grid-container");
const fragment = document.createDocumentFragment();
let dimension = 16;
const getRandomInt = () => {return Math.floor((Math.random()) * (255 - 1 + 1)) + 1};
for(let i = 0; i < dimension; i++) {
    const gridRow = document.createElement("div");    
    fragment.appendChild(gridRow);
    for(let j = 0; j < dimension; j++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        let eventTriggered = 0;
        grid.addEventListener("mouseover", (event) => {
            eventTriggered += 0.1
            event.target.style.backgroundColor = `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()}, ${eventTriggered})`
        });
        if (dimension > 50) {
            grid.setAttribute("style", `width: ${250 / dimension}px; height: ${250  / dimension}px`)
        } else {
            grid.setAttribute("style", `width: ${300 / dimension}px; height: ${300  / dimension}px`)
        }
        
        gridRow.appendChild(grid);
    }
};
container.appendChild(fragment);
