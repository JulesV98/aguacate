import express from 'express';
const router = express.Router();
// importar el modelo nota
import Vendedor from '../models/vendedor';
// Agregar una nota
router.post('/nuevo-usuario', async(req, res) => {
    const body = req.body;
    try {
        const vendedorDB = await Vendedor.create(body);
        res.status(200).json(vendedorDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
});
// Get con parámetros
router.get('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const vendedorDB = await Vendedor.findOne({_id});
        res.json(vendedorDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
});
// Delete eliminar una nota
router.delete('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const vendedorDB = await Vendedor.findByIdAndDelete({_id});
        if(!vendedorDB){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(vendedorDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
});
// Put actualizar una nota
router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const vendedorDB = await Vendedor.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(vendedorDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
});
// Exportamos la configuración de express app
module.exports = router;