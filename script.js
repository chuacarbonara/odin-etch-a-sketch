const container = document.getElementById("container");

function createDiv(size) {
    for (let i = 0; i < (size**2); i++) {
        const div = document.createElement("div");
        div.classList.add("gridDiv");
        const divSize = (640 / size) - (4);
        div.style.cssText = `min-width: ${divSize}px; min-height: ${divSize}px;`;
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "maroon";
        });
    }
}

createDiv(16);
