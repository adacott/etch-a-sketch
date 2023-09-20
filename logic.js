function drawGrid() {
    for (i = 1; i <= (gds.value * gds.value); i++) {
        const nm = document.createElement("div");
        nm.style.border = "1px solid rgba(128, 0, 128, 0.461)"
        nm.classList.add("div-base");

        // The following are for debug purposes to see the grid is correct
        // const newText = document.createTextNode(`${i}`);
        // nm.appendChild(newText);
        // nm.style.color = "White";
        // 

        nm.style.width = `${w}`;
        nm.style.height = `${h}`;
        // console.log(nm.style.width);
        cont.appendChild(nm);
    }
}

function changeBackground(e) {
    if (e.target.className == "div-base") {
        e.target.classList.add("hover");
    }
}

function resetBackground() {
    divs = document.querySelectorAll(".hover");
    divs.forEach(dv => dv.classList.remove("hover"));
}

function modifyGrid() {
    const parent = document.querySelector(".div-container");
    w = cw / gds.value + "px";
    h = ch / gds.value + "px";

    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }

    for (i = 1; i <= (gds.value * gds.value); i++) {
        console.log(i);
        const nm = document.createElement("div");
        nm.style.border = "1px solid rgba(128, 0, 128, 0.461)";
        nm.classList.add("div-base");
        nm.style.width = `${w}`;
        nm.style.height = `${h}`;
        cont.appendChild(nm);
    }

    const tx = document.querySelector(".grid-label");
    tx.textContent = `Grid-size: ${gds.value}`;

    // reinstate new event listeners for newly created divs
    let divs = document.querySelectorAll(".div-base");
    divs.forEach(dv => dv.addEventListener("mouseover", changeBackground));
}

// Records current container size and auto-calculates and draws grid
const cont = document.querySelector(".div-container");
let gds = document.querySelector("input");
const cw = cont.clientWidth;
const ch = cont.clientHeight;
let w = cw / gds.value + "px";
let h = ch / gds.value + "px";


// For a 16x16 grid, create 256 squares that are scaled based on width and height of the container

window.onload = drawGrid();

// Event listeners for the whole page
let divs = document.querySelectorAll(".div-base");
divs.forEach(dv => dv.addEventListener("mouseover", changeBackground));

const btn = document.querySelector(".reset");
btn.addEventListener("click", resetBackground);

gds.addEventListener("change", modifyGrid);