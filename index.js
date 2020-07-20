const express = require('express'); 
const conectarDB = require('./config/db'); 
const cors = require('cors'); 

// crear el servidor
const app = express(); 

// Conectar a la base de datos
conectarDB(); 

// habilitar cors
app.use(cors()); 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin: https://wizardly-aryabhata-4f0029.netlify.app');  // parametros predeterminados.
    res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET');
    next();
  })

// Habilitar express.json
app.use(express.json({ extended: true })); 

// puerto de la app
const port = process.env.port || 4000; 

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth')); 
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas')); 

// arrancar la app
app.listen(port, '0.0.0.0',() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`); 
});




