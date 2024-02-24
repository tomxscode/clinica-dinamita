const
  hemogramaBtn = document.getElementById('hemogramaBtn'),
  tablaResultados = document.getElementById('tablaResultados'),
  graficoResultados = document.getElementById('graficoResultados')
  ;

hemogramaBtn.addEventListener('click', () => {
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
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
})