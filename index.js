const express = require('express'); // Solo una vez
const dotenv = require('dotenv')

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta simple de prueba
app.get('/', (req, res) => {
    res.send('Servidor corriendo en Capsule of Congratulations API');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
