import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import logoFooter from './images/bugbusters.jpg'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [chartData, setChartData] = useState(null);
  const [fileName, setFileName] = useState("")

  const loadData = async () => {
    try{
      const response = await fetch('data/rfmData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      renderChart(data);
    } catch (error) {
      console.error('Error al cargar los datos', error);
    }
  }
    

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name)
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        renderChart(data);
      };
      reader.readAsText(file);
    }
  };

  const renderChart = (rfmData) => {
    const labels = rfmData.map(customer => `Cliente ${customer.customerID}`);
    const recencyData = rfmData.map(customer => customer.recency);
    const frequencyData = rfmData.map(customer => customer.frequency);
    const monetaryData = rfmData.map(customer => customer.monetary);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Recency',
          data: recencyData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Frequency',
          data: frequencyData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Monetary',
          data: monetaryData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    });
  };

  return (
    <div className="App">
      <div className="root">
        <header className="App-header">
          <h1><span className='App-header__v'>V</span>isualización RFM</h1>
        </header>
        <main>
          <section id="upload-section">
            <h2>Cargar Datos</h2>
            <button onClick={loadData}>Cargar Datos</button>
            <div className="file-upload">
              <label htmlFor="file-input" className="file-upload-label">
                Seleccionar Archivo
              </label>
              <input id="file-input" type="file" accept=".json" onChange={handleFileUpload} className="file-upload-input" />
              <span className="file-upload-name">{fileName}</span>
            </div>
          </section>
          <section id="charts-section">
            <h2>Visualización de Datos</h2>
            <div style={{ width: '100%' }}> {/* Ajuste para que ocupe el ancho completo */}
              {chartData && (
                <Bar
                  data={chartData}
                  options={{
                    indexAxis: 'y',
                    elements: {
                      bar: {
                        borderWidth: 2,
                      },
                    },
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                      title: {
                        display: true,
                        text: 'Gráfico de Barras',
                      },
                    },
                  }}
                />
              )}
            </div>
          </section>
        </main>
        <footer className="footer">
          <img className="footer__logo" src={logoFooter} alt="logo BugsBusters"/>
          <p className="footer__text">
          © &nbsp;&nbsp;&nbsp; •Isabel Domínguez •Kelvin Suarez •Alfredo •Alma Linares •Héctor Morales •Natalia Lopera 
            •Olaf de Jesús •Sergio Anaya
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;