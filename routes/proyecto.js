const { Router } = require('express')
const { getProyectos, createProyecto, updateProyecto} = require('../controllers/proyecto')

const router = Router()

// consultar todos
router.get('/', getProyectos)

// crear
router.post('/', createProyecto)

// Actualizar
router.put('/:id', updateProyecto)


module.exports = router;