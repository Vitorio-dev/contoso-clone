document.addEventListener("DOMContentLoaded", () => {
    const gridPrimario = document.getElementById("gridPrimario");
    const gridCentral = document.getElementById("gridCentral");
    const gridFinal = document.getElementById("gridFinal");

    gridPrimario.innerHTML = '';
    gridCentral.innerHTML = '';
    gridFinal.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item", "normal", "chart-container");

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 100 100");

        const barWidth = 10;
        const barHeight = [40, 60, 30, 80, 50, 70];  

        barHeight.forEach((height, index) => {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", index * (barWidth + 5));  
            rect.setAttribute("y", 100 - height);  
            rect.setAttribute("width", barWidth);
            rect.setAttribute("height", height);
            rect.setAttribute("fill", "blue");

            svg.appendChild(rect);
        });

        div.appendChild(svg);
        gridPrimario.appendChild(div);
    }


    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item", "pequeno", "central");
        gridCentral.appendChild(div);
    }
    const largoDiv = document.createElement("div");
    largoDiv.classList.add("grid-item", "largo");
    gridCentral.appendChild(largoDiv);

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    div1.classList.add("grid-item", "pequeno");
    div2.classList.add("grid-item", "maior");
    div3.classList.add("grid-item", "largo");
    div3.id = "divGrafico";

    [div1, div2, div3].forEach(div => gridFinal.appendChild(div));

    const gridTeste = document.getElementById("divGrafico");
    const graficoDiv = document.createElement("div");
    graficoDiv.classList.add("chart-container");
    graficoDiv.id = "grafico";

    gridTeste.innerHTML = ''; 
    gridTeste.appendChild(graficoDiv);
});
