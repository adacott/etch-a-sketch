// Find appropriate dimensions of div container
const cont = document.querySelector(".div-container");
const gds = document.querySelector(".grid-size");
const cw = cont.clientWidth;
const ch = cont.clientHeight;
let w = cw / gds.value + "px";
let h = ch / gds.value + "px";
let state = "default";
let color = "#FFFFFF";

function startUp() {
    for (i = 1; i <= (gds.value * gds.value); i++) {
        const nm = document.createElement("div");
        nm.style.border = "1px solid rgba(128, 0, 128, 0.461)"
        nm.classList.add("div-base");

        nm.style.width = `${w}`;
        nm.style.height = `${h}`;
        cont.appendChild(nm);
    }
}

function changeBackground() {
    switch (state) {
        case "default":
            this.style.backgroundColor = "#FFFFFF";
            break;
        case "pickColor":
            this.style.backgroundColor = color;
            break;
        case "rainbow":
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            r = random(1, 256);
            g = random(1, 256);
            b = random(1, 256);

            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            break;
    }
}

function userColor(e) {
    state = "pickColor"
    color = e.target.value;
}

function rainbowToggle() {
    if (this.checked) {
        state = "rainbow";
    }
    else if (!this.checked) {
        state = "pickColor";
    }
}

function resetBackground() {
    divs = document.querySelectorAll(".div-base");
    divs.forEach(dv => dv.style.backgroundColor = "#000000");
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
        nm.style.width = `${w} `;
        nm.style.height = `${h} `;
        cont.appendChild(nm);
    }

    const tx = document.querySelector(".grid-label");
    tx.textContent = `Grid - size: ${gds.value} `;

    // reinstate new event listeners for newly created divs
    let divs = document.querySelectorAll(".div-base");
    divs.forEach(dv => dv.addEventListener("mouseover", changeBackground));
}

// Draw the initial grid
window.onload = startUp();

// Select reset button, the divs to color, and the color picker
const btn = document.querySelector(".reset");
let divs = document.querySelectorAll(".div-base");
colorPicker = document.querySelector("#color-picker");
rainbow = document.querySelector("#rainbow");

// Create eventlisteners for all selections above
divs.forEach(dv => dv.addEventListener("mouseover", changeBackground));
btn.addEventListener("click", resetBackground);
gds.addEventListener("change", modifyGrid);
colorPicker.addEventListener("change", userColor);
colorPicker.addEventListener("input", userColor);
rainbow.addEventListener("input", rainbowToggle);




//TODO: 
// Create a way for changeBackground to access and use the color input.
// Create a rainbow function that when rainbow is checkmarked it changes "changeBackground" function
// to randomly select the colors

// May need to refactor my code to change the background color instead of adding and removing
// a class -- it is just such a MASSIVE pain in the fucking ass to select something thats not
// in the DOM tree.


