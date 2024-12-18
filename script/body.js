document.addEventListener("DOMContentLoaded",()=>{
    const gridPrimario = document.getElementById("gridPrimario");
    const gridCentral = document.getElementById("gridCentral");
    const gridFinal = document.getElementById("gridFinal");

    gridPrimario.innerHTML = ''
    gridCentral.innerHTML = ''
    gridFinal.innerHTML=''

    for (let criacao = 0; criacao < 4; criacao++) {

        const div = document.createElement ("div");

        div.classList.add ('grid-item', 'normal', 'chart-container');
        gridPrimario.appendChild (div);
    }

    for (let criacao = 0; criacao < 3; criacao++) {
        const div = document.createElement ("div");

        div.classList.add ('grid-item', 'pequeno', 'central');
        gridCentral.appendChild (div);
    }

    for (let criacao = 0; criacao < 1; criacao++) {
        const div = document.createElement ("div");

        div.classList.add ('grid-item','largo');
        gridCentral.appendChild (div);
    }   

    for (let criacao = 0; criacao <1; criacao++) {
        
        const div1 = document.createElement ("div");
        const div2 = document.createElement ("div");
        const div3 = document.createElement ("div");

        div1.classList.add ('grid-item', 'pequeno')
        gridFinal.appendChild (div1);

        div2.classList.add ('grid-item', 'maior')
        gridFinal.appendChild (div2);

        div3.classList.add ('grid-item', 'largo')
        div3.id = 'divGrafico'
        gridFinal.appendChild (div3);


    }
    const gridTEste = document.getElementById("divGrafico")
    
    const div4 = document.createElement ("div");
    gridTEste.innerHTML= ''

     div4.classList.add ("chart-container")
     div4.id = 'grafico'
     gridTEste.appendChild(div4)
})