import express from 'express';
import { GetImagenesPorFelicitacionId, PostImagen, DeleteImagen } from '../controllers/imagenController';

const router = express.Router();

router.get('/Felicitacion/:id/imagenes', GetImagenesPorFelicitacionId);  // Obtener imágenes por felicitación
router.post('/Felicitacion/:id/imagenes', PostImagen);                   // Subir imagen
router.delete('/Imagen/:id', DeleteImagen);                              // Eliminar imagen por id

export default router;
