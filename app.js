import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const mongoose=require('mongoose');
const app = express();

//conexión Database
mongoose.connect('mongodb+srv://grupo5-10:510@cluster0.rvkui.mongodb.net/db2?retryWrites=true&w=majority')
    .then(db=>console.log('base de datos conectada'))
    .catch(err=>console.error(err));

//MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/producto'));
app.use('/api', require('./routes/vendedor'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Ruta
//app.get('/', function (req, res) {
//res.send('Hello World!');
//});

//Puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
console.log('Example app listening on port'+ app.get('puerto'));
});

