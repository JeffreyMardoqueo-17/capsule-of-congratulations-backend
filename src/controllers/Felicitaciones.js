import { executeQuery } from '../helpers/dbHelper';
import sql from 'mssql';

/**
 * Método para obtener todas las felicitaciones o una felicitación por su Id.
 * Si el Id no se proporciona, se devuelven todas las felicitaciones.
 */
export const GetFelicitaciones = async (req, res) => {
    const { id } = req.params;
    try {
        const query = id ? 'EXEC SPFelicitacionGet @Id' : 'EXEC SPFelicitacionGet';
        const params = id ? [{ name: 'Id', type: sql.INT, value: id }] : [];
        const result = await executeQuery(query, params);

        if (id && result.recordset.length === 0) {
            res.status(404).json({ msg: 'Felicitación no encontrada' });
        } else {
            res.status(200).json(result.recordset);
        }
    } catch (error) {
        console.error(`Error al obtener las felicitaciones: ${error}`);
        res.status(500).json({ msg: 'Error al obtener las felicitaciones' });
    }
};

/**
 * Método para insertar una nueva felicitación.
 */
export const PostFelicitacion = async (req, res) => {
    const { nombre, apellido, mensaje } = req.body;
    if (!nombre || !apellido || !mensaje) {
        return res.status(400).json({ msg: 'Los campos nombre, apellido y mensaje son requeridos' });
    }
    try {
        const result = await executeQuery('EXEC SPFelicitacionCreate @Nombre, @Apellido, @Mensaje', [
            { name: 'Nombre', type: sql.VarChar(50), value: nombre },
            { name: 'Apellido', type: sql.VarChar(50), value: apellido },
            { name: 'Mensaje', type: sql.VarChar(sql.MAX), value: mensaje },
        ]);

        res.status(201).json({ msg: 'Felicitación creada correctamente', id: result.recordset[0].Id });
    } catch (error) {
        console.error(`Error al insertar la felicitación: ${error}`);
        res.status(500).json({ msg: 'Error al insertar la felicitación' });
    }
};

/**
 * Método para actualizar una felicitación existente.
 */
export const PutFelicitacion = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, mensaje } = req.body;
    if (!nombre || !apellido || !mensaje) {
        return res.status(400).json({ msg: 'Los campos nombre, apellido y mensaje son requeridos' });
    }
    try {
        const result = await executeQuery('EXEC SPFelicitacionUpdate @Id, @Nombre, @Apellido, @Mensaje', [
            { name: 'Id', type: sql.INT, value: id },
            { name: 'Nombre', type: sql.VarChar(50), value: nombre },
            { name: 'Apellido', type: sql.VarChar(50), value: apellido },
            { name: 'Mensaje', type: sql.VarChar(sql.MAX), value: mensaje },
        ]);

        if (result.recordset.length === 0) {
            res.status(404).json({ msg: 'Felicitación no encontrada para actualizar' });
        } else {
            res.status(200).json({ msg: 'Felicitación actualizada correctamente', felicitacion: result.recordset[0] });
        }
    } catch (error) {
        console.error(`Error al actualizar la felicitación: ${error}`);
        res.status(500).json({ msg: 'Error al actualizar la felicitación' });
    }
};

/**
 * Método para eliminar una felicitación por su Id.
 */
export const DeleteFelicitacion = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await executeQuery('EXEC SPFelicitacionDelete @Id', [{ name: 'Id', type: sql.INT, value: id }]);

        if (result.rowsAffected[0] === 0) {
            res.status(404).json({ msg: 'Felicitación no encontrada para eliminar' });
        } else {
            res.status(200).json({ msg: 'Felicitación eliminada correctamente' });
        }
    } catch (error) {
        console.error(`Error al eliminar la felicitación: ${error}`);
        res.status(500).json({ msg: 'Error al eliminar la felicitación' });
    }
};
