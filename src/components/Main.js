import React from "react";
import {Bar} from 'react-chartjs-2';
import TableauDashboard from "./TableauDashboard";

function Main ({loadData, handleFileUpload, fileName, chartData, url}) {
    return (
        <main>
            <section id="upload-section">
                <h2>Modos de carga</h2>
                <button onClick={loadData}>Cargar Datos</button>
                <div className="file-upload">
                    <label htmlFor="file-input" className="file-upload-label">Seleccionar Archivo</label>
                    <input id="file-input" type="file" accept=".json,.csv" onChange={handleFileUpload} className="file-upload-input" />
                    <span className="file-upload-name">{fileName}</span>
                </div>
                <TableauDashboard url={url} />
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
                <div></div>
            </section>
        </main>
    );
};

export default Main