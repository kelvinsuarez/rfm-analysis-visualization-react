import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ data }) => {
  const labels = data.map(item => `Cliente ${item.customerID}`);
  const recencyData = data.map(item => item.recency);
  const frequencyData = data.map(item => item.frequency);
  const monetaryData = data.map(item => item.monetary);

  const chartData = {
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
  };

  return (
    <Radar 
      data={chartData} 
      options={{
        scales: {
          r: {
            beginAtZero: true
          }
        }
      }}
    />
  );
};

export default RadarChart;