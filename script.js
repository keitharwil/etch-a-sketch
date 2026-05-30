const container = document.querySelector("#grid-container");
const dimBtn = document.querySelector("#grid-setting")
const fragment = document.createDocumentFragment();

let dimension = 16; 

const getRandomInt = () => {return Math.floor((Math.random()) * (255 - 1 + 1)) + 1};

dimBtn.addEventListener("click", (event) =>  {
    dimension = parseInt(prompt("Type new grid size: [1-100] Default: 16", 16));
    if (dimension > 100 || dimension < 1) {
        alert("Only Enter value up to (1-100)") 
        return
    };
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    
    createGrid(dimension);
});

const createGrid = (dimension) => {
    for(let i = 0; i < dimension; i++) {
        const gridRow = document.createElement("div");    
        fragment.appendChild(gridRow);
        for(let j = 0; j < dimension; j++) {
            const grid = document.createElement("div");
            grid.className = "grid";
            let eventTriggered = 0;
            grid.addEventListener("mouseover", (event) => {
                eventTriggered += 0.25
                event.target.style.backgroundColor = `rgba(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()}, ${eventTriggered})`
            });
            if (dimension > 70) {
                grid.setAttribute("style", `width: ${400 / dimension}px; height: ${400  / dimension}px; border: 0.5px solid black`)
            } else {
                grid.setAttribute("style", `width: ${500 / dimension}px; height: ${500  / dimension}px`)
            }
            
            gridRow.appendChild(grid);
        }
    };
    container.appendChild(fragment);
};

createGrid(dimension)