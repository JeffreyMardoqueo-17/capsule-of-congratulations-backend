import express from 'express';
import configuracion from './configuracion'; // Para la configuración del puerto y base de datos
import cors from 'cors';

// Importar solo las rutas necesarias
import felicitacionesRouter from './routers/Felicitacion.routes'; // Ruta para felicitaciones

// Crear la app de express
const app = express();
const port = configuracion.port; // Puerto tomado desde la configuración

// Configurar el puerto de la app
app.set('port', port);

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parsear JSON
app.use(express.urlencoded({ extended: false })); // Parsear datos de formularios

// Usar las rutas necesarias
app.use('/api', felicitacionesRouter); // Prefijo /api para manejar felicitaciones

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

export default app;
