const express = require('express');
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId
} = require('../controllers/usuario.controller');

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarioPorId);

module.exports = router;