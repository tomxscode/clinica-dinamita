const hemogramaBtn = document.getElementById('hemogramaBtn'),
      perfilLipidicoBtn = document.getElementById('perfilLipidicoBtn'),
      colesterolBtn = document.getElementById('colesterolBtn'),
      trigliceridosBtn = document.getElementById('trigliceridosBtn'),
      coagulacionBtn = document.getElementById('coagulacionBtn'),
      bioquimicoBtn = document.getElementById('bioquimicoBtn'),
      orinaBtn = document.getElementById('orinaBtn'),
      tablaResultados = document.getElementById('tablaResultados'),
      graficoResultados = document.getElementById('graficoResultados');

let myChart; // Declarar la variable myChart fuera de las funciones

hemogramaBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Normal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Glóbulos rojos</td>
          <td>4.8 millones/uL</td>
          <td>4.7 - 6.1 millones/uL</td>
        </tr>
        <tr>
          <td>Hemoglobina</td>
          <td>14 g/dL</td>
          <td>14 - 18 g/dL (hombres)<br>12 - 16 g/dL (mujeres)</td>
        </tr>
        <tr>
          <td>Hematocrito</td>
          <td>42%</td>
          <td>40 - 52% (hombres)<br>36 - 48% (mujeres)</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Glóbulos rojos', 'Hemoglobina', 'Hematocrito'],
    datasets: [{
      data: [4.8, 14, 42],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)'
      ]
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
});

perfilLipidicoBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Deseable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Colesterol Total</td>
          <td>210 mg/dL</td>
          <td>< 200 mg/dL</td>
        </tr>
        <tr>
          <td>Triglicéridos</td>
          <td>185 mg/dL</td>
          <td>< 150 mg/dL</td>
        </tr>
        <tr>
          <td>HDL Colesterol</td>
          <td>38 mg/dL</td>
          <td>> 40 mg/dL</td>
        </tr>
        <tr>
          <td>LDL Colesterol</td>
          <td>142 mg/dL</td>
          <td>< 130 mg/dL</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Colesterol Total', 'Triglicéridos', 'HDL Colesterol', 'LDL Colesterol'],
    datasets: [{
      label: 'Resultados (mg/dL)',
      data: [210, 185, 38, 142],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});

colesterolBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Deseable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Colesterol Total</td>
          <td>210 mg/dL</td>
          <td>< 200 mg/dL</td>
        </tr>
        <tr>
          <td>LDL Colesterol</td>
          <td>142 mg/dL</td>
          <td>< 130 mg/dL</td>
        </tr>
        <tr>
          <td>HDL Colesterol</td>
          <td>38 mg/dL</td>
          <td>> 40 mg/dL</td>
        </tr>
        <tr>
          <td>Triglicéridos</td>
          <td>185 mg/dL</td>
          <td>< 150 mg/dL</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Colesterol Total', 'LDL Colesterol', 'HDL Colesterol', 'Triglicéridos'],
    datasets: [{
      label: 'Resultados (mg/dL)',
      data: [210, 142, 38, 185],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});

trigliceridosBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Deseable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Triglicéridos</td>
          <td>185 mg/dL</td>
          <td>< 150 mg/dL</td>
        </tr>
        <tr>
          <td>Colesterol Total</td>
          <td>210 mg/dL</td>
          <td>< 200 mg/dL</td>
        </tr>
        <tr>
          <td>HDL Colesterol</td>
          <td>38 mg/dL</td>
          <td>> 40 mg/dL</td>
        </tr>
        <tr>
          <td>LDL Colesterol</td>
          <td>142 mg/dL</td>
          <td>< 130 mg/dL</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Triglicéridos', 'Colesterol Total', 'HDL Colesterol', 'LDL Colesterol'],
    datasets: [{
      label: 'Resultados (mg/dL)',
      data: [185, 210, 38, 142],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});

orinaBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Normal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Glucosa</td>
          <td>150 mg/dL</td>
          <td>0 - 15 mg/dL</td>
        </tr>
        <tr>
          <td>Proteínas</td>
          <td>Trazas</td>
          <td>Negativo</td>
        </tr>
        <tr>
          <td>Cetonas</td>
          <td>Pequeña</td>
          <td>Negativo</td>
        </tr>
        <tr>
          <td>Bilirrubina</td>
          <td>Negativo</td>
          <td>Negativo</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Glucosa', 'Proteínas', 'Cetonas', 'Bilirrubina'],
    datasets: [{
      label: 'Resultados',
      data: [150, 1, 2, 0], // Valores numéricos representativos
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});

bioquimicoBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Normal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Glucosa</td>
          <td>160 mg/dL</td>
          <td>70 - 110 mg/dL</td>
        </tr>
        <tr>
          <td>Creatinina</td>
          <td>1.5 mg/dL</td>
          <td>0.7 - 1.3 mg/dL</td>
        </tr>
        <tr>
          <td>Ácido Úrico</td>
          <td>6.5 mg/dL</td>
          <td>3.5 - 7.2 mg/dL</td>
        </tr>
        <tr>
          <td>Proteínas Totales</td>
          <td>7.2 g/dL</td>
          <td>6.4 - 8.3 g/dL</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Glucosa', 'Creatinina', 'Ácido Úrico', 'Proteínas Totales'],
    datasets: [{
      label: 'Resultados',
      data: [160, 1.5, 6.5, 7.2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});

coagulacionBtn.addEventListener('click', () => {
  // Destruir la instancia anterior del gráfico si existe
  if (myChart) {
    myChart.destroy();
  }

  tablaResultados.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Prueba</th>
          <th>Resultado</th>
          <th>Rango Normal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tiempo de Protrombina (TP)</td>
          <td>14 segundos</td>
          <td>11 - 13.5 segundos</td>
        </tr>
        <tr>
          <td>Tiempo Parcial de Tromboplastina (TPT)</td>
          <td>36 segundos</td>
          <td>25 - 35 segundos</td>
        </tr>
        <tr>
          <td>Fibrinógeno</td>
          <td>320 mg/dL</td>
          <td>200 - 400 mg/dL</td>
        </tr>
      </tbody>
    </table>
  `;

  var data = {
    labels: ['Tiempo de Protrombina (TP)', 'Tiempo Parcial de Tromboplastina (TPT)', 'Fibrinógeno'],
    datasets: [{
      label: 'Resultados',
      data: [14, 36, 320],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false
    }]
  };

  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var ctx = document.getElementById("graficoResultados");
  myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
});