document.addEventListener("DOMContentLoaded",()=>{
    const grid = document.getElementById("gridCentral");

    grid.innerHTML = ''

    for (let i = 0; i < 3; i++) {
        const div = document.createElement ("div");

        div.classList.add ('grid-item', 'pequeno', 'central');
       grid.appendChild (div);
    }

    for (let i = 0; i < 1; i++) {
        const div = document.createElement ("div");

        div.classList.add ('grid-item','largo');
        grid.appendChild (div);
    } 
})