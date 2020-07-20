// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router(); 
const { check } = require('express-validator'); 
const authController = require('../controllers/authController'); 
const auth = require('../middleware/auth');

// Iniciar sesión 
// api/auth
// Obtiene el usuario autenticado
router.post('/', 
    
    authController.autenticarUsuario
); 

router.get('/', 
    auth,
    authController.usuarioAutenticado
    //comentario
);



module.exports = router; 