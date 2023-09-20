const cont = document.querySelector(".container");
let gds = document.querySelector(".grid-size");

// Retrieve height and width of container to calculate grid size
const cw = cont.clientWidth;
const ch = cont.clientHeight;
const w = cw / gds.value + "px";
const h = ch / gds.value + "px";


// For a 16x16 grid, create 256 squares that are scaled based on width and height of the container
for (i = 1; i <= (gds.value * gds.value); i++) {
    const nm = document.createElement("div");
    nm.style.border = "1px solid purple";
    nm.classList.add("div-base");

    // The following are for debug purposes to see the grid is correct
    const newText = document.createTextNode(`${i}`);
    nm.appendChild(newText);
    nm.style.color = "White";
    // 


    nm.style.width = `${w}`;
    nm.style.height = `${h}`;
    // console.log(nm.style.width);
    cont.appendChild(nm);
}

function changeBackground(e) {
    if (e.target.className == "div-base") {
        e.target.classList.add("hover");
        //e.target.classList.toggle("hover");
        // e.target.classList.remove("hover");
    }
}

function resetBackground() {
    divs = document.querySelectorAll(".hover");
    divs.forEach(dv => dv.classList.remove("hover"));
}

let divs = document.querySelectorAll(".div-base");
divs.forEach(dv => dv.addEventListener("mouseover", changeBackground));

const btn = document.querySelector(".reset");
btn.addEventListener("click", resetBackground);
console.log(btn);

