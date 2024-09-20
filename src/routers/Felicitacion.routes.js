import express from 'express';
import {
    GetFelicitaciones,
    PostFelicitacion,
    PutFelicitacion,
    DeleteFelicitacion
} from '../controllers/felicitacionController'; // Asegúrate de tener las funciones importadas correctamente

const router = express.Router();

// Rutas para las felicitaciones
router.get('/Felicitacion', GetFelicitaciones);         // Obtener todas las felicitaciones
router.get('/Felicitacion/:id', GetFelicitaciones);     // Obtener una felicitación por id
router.post('/Felicitacion', PostFelicitacion);         // Crear una nueva felicitación
router.put('/Felicitacion/:id', PutFelicitacion);       // Actualizar una felicitación por id
router.delete('/Felicitacion/:id', DeleteFelicitacion); // Eliminar una felicitación por id

export default router;
