# Visualización RFM con React 


Este proyecto es una aplicación web construida con React para visualizar el análisis RFM (Recency, Frequency, Monetary). El análisis RFM es una técnica utilizada en marketing para evaluar y categorizar a los clientes en función de sus comportamientos de compra. La aplicación permite cargar datos desde archivos JSON o CSV y muestra un dashboard de Tableau embebido para visualizaciones adicionales.

Funciones Principales
Carga de Datos
La aplicación permite cargar datos RFM desde archivos en formato JSON o CSV. Los datos se utilizan para crear gráficos que representan los tres componentes del análisis RFM: Recency, Frequency y Monetary.

Dashboard de Tableau
La aplicación incluye un componente para mostrar un dashboard de Tableau embebido, lo que permite visualizar datos de manera interactiva y detallada directamente en la aplicación.

Componentes React Modulares
El código está organizado en componentes modulares de React, lo que facilita la gestión y la extensión de la aplicación.

Detalles de los Componentes
App.js
Descripción: Es el componente principal que maneja la lógica de carga de datos y la visualización de los gráficos y el dashboard de Tableau.
Funciones Clave:
loadData: Función para cargar datos desde un archivo JSON.
handleFileUpload: Función para manejar la carga de archivos JSON o CSV.
renderChart: Función para renderizar los gráficos basados en los datos cargados.
Header.js
Descripción: Componente para el encabezado de la aplicación.
Funciones Clave: Presenta el título de la aplicación.
Footer.js
Descripción: Componente para el pie de página de la aplicación.
Funciones Clave: Muestra el logotipo y los nombres de los colaboradores del proyecto.
TableauDashboard.js
Descripción: Componente que renderiza el dashboard de Tableau embebido.
Funciones Clave: Alterna la visualización del dashboard de Tableau embebido.

Enlace directo: https://kelvinsuarez.github.io/rfm-analysis-visualization-react/ 