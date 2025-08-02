const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");
let size;

function createDiv(size) {
    for (let i = 0; i < (size**2); i++) {
        const div = document.createElement("div");
        div.classList.add("gridDiv");
        div.style.width = `${640 / size}px`;
        div.style.height = `${640 / size}px`;
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "maroon";
        });
    }
}

createDiv(16);

resizeBtn.addEventListener("click", () => {
    let askNum = prompt("Please pick a number from 2 to 100");
    if (askNum < 2 || askNum > 100 || askNum == NaN){
        prompt("Error. Please pick a valid whole number from 2 to 100");
    }
    else if (askNum) {
        container.innerHTML = "";
        createDiv(askNum);
    }
})