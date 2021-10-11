import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const vendedorSchema = new Schema({
    _Id:String,
    nombre:String,
    apellido:String,
    celular:Number,
    correo:String,
    contraseña:String,
    ciudad:String,
    latitud:Number,
    longitud: Number,
});

// Convertir a modelo
const Vendedor = mongoose.model('Vendedor', vendedorSchema);
export default Vendedor;