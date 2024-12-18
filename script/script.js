document.addEventListener("DOMContentLoaded", () =>{
    const grafico = document.getElementById("grafico");
    const anoSelect = document.getElementById("ano");
    const  gerarGraficoBtn = document.getElementById("gerarGrafico");

    let dados = [];

    fetch ("./dados/dolar_data.json")
    .then(response => response.json())
    .then(json =>{
        dados = json;

    const anosDisponiveis = [...new Set(dados.map(d => d.ano))];
        anosDisponiveis.forEach(ano => {
        const option = document.createElement("option");
        option.value = ano;
        option.textContent = ano;
        anoSelect.appendChild(option);
      }); 
  })
  .catch(err => console.error("erro ao carregar o arquivo json", err));
     
  
  const gerarGrafico = () => {
    const anoSelecionado = parseInt(anoSelect.value); 
    if (!anoSelecionado) {
      alert("Selecione um ano válido!");
      return;
    }
  
    const dadosAno = dados.find(d => d.ano === anoSelecionado);
    if (!dadosAno || !dadosAno.meses.length) {
      alert("Não há dados para o ano selecionado!");
      return;
    }
  
    const mesesAno = dadosAno.meses;
  
    const maiorValor = Math.max(...mesesAno.map(m => m.valor));
  
    grafico.innerHTML = "";
  
    mesesAno.forEach(mes => {
      const alturaBarra = (mes.valor / maiorValor) * 100;
  
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${alturaBarra}%`;
      bar.style.width = `20px`; 
      bar.innerHTML = `<span>${mes.valor.toFixed(2)}</span>`;
  
   
      const label = document.createElement("div");
      label.classList.add("bar-label");
      label.textContent = mes.mes;
  
      grafico.appendChild(bar);
      grafico.appendChild(label);
    });
  };
  

    gerarGraficoBtn.addEventListener("click", gerarGrafico);
})  