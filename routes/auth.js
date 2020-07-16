// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router(); 
const { check } = require('express-validator'); 
const authController = require('../controllers/authController'); 
const auth = require('../middleware/auth');

// Iniciar sesión 
// api/auth
// Obtiene el usuario autenticado
router.get('/', 
    auth,
    authController.usuarioAutenticado
);

router.post('/', 
    
    authController.autenticarUsuario
); 


module.exports = router; 