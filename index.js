import express from 'express';
import router from './routes/index.js';

const app = express();

// definir puerto
const port = process.env.PORT || 4000;

// habilitar PUG
app.set('view engine', 'pug');

// Definir la carpeta publica
app.use(express.static('./public'));

// agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})