import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const productoSchema = new Schema({
    _Id:String,
    nombre:String,
    vendedor:String,
    codigo:Number,
    precio: Number,
    descripcion: String
});

// Convertir a modelo
const Producto = mongoose.model('Producto', productoSchema);
export default Producto;