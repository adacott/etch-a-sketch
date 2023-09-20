cont = document.querySelector(".container");

// Retrieve height and width of container to calculate grid size
let cw = cont.clientWidth;
let ch = cont.clientHeight;
const grid = 16;
const w = cw / grid + "px";
const h = ch / grid + "px";


// For a 16x16 grid, create 256 squares that are scaled based on width and height of the container
for (i = 1; i <= (grid * grid); i++) {
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

divs = document.querySelectorAll(".div-base");
// divs.forEach(dv => dv.addEventListener("mouseover", function (e) {
//     console.log(e.target.className);
// }));

divs.forEach(dv => dv.addEventListener("mouseover", changeBackground));



console.log(divs);
