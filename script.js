document.addEventListener("DOMContentLoaded", function () {
  // Função para criar o gráfico de barras
  function createBarChart(data, containerId, chartLabels) {
      const container = document.getElementById(containerId);
      
      if (!container) return;

      container.innerHTML = ''; // Limpar o container antes de desenhar o gráfico

      // Criação de barras com base nos dados fornecidos
      data.forEach((value, index) => {
          const bar = document.createElement('div');
          const label = document.createElement('div');

          // Lógica para definir a altura da barra com base nos valores dos dados
          const height = (value / Math.max(...data)) * 100;  // Normaliza a altura para o gráfico

          bar.classList.add('chart-bar');
          bar.style.height = `${height}%`;  // Define a altura da barra

          // Definindo o texto da label embaixo da barra
          label.classList.add('chart-label');
          label.textContent = chartLabels ? chartLabels[index] : value;

          // Adicionando a barra e o rótulo ao container
          const chartElement = document.createElement('div');
          chartElement.classList.add('chart-container');
          chartElement.appendChild(bar);
          chartElement.appendChild(label);
          
          container.appendChild(chartElement);

          // Animação para aparecerem com atraso
          setTimeout(() => {
              bar.style.transition = 'height 1s ease-in-out';
              bar.style.height = `${height}%`;
          }, index * 200); // Cada barra aparece com um pequeno atraso
      });
  }

  // Exemplo de dados para os gráficos
  const chartData1 = [35, 50, 75, 100, 60, 80]; // Dados para o gráfico 1
  const chartLabels1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // Rótulos para o gráfico 1

  const chartData2 = [50, 40, 60, 90, 30, 80]; // Dados para o gráfico 2
  const chartLabels2 = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6']; // Rótulos para o gráfico 2

  // Criando os gráficos com os dados
  createBarChart(chartData1, 'chart1', chartLabels1);
  createBarChart(chartData2, 'chart2', chartLabels2);
});
