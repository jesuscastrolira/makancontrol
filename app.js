const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor

// Configuración de rutas estáticas para los archivos HTML, CSS y JavaScript
app.use(express.static(__dirname));

// Ruta principal que sirve la página HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Reemplaza 'index.html' con el nombre de tu archivo HTML principal
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

