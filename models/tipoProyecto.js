const {Schema, model} = require('mongoose')

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        enum:['ENSAYO', 'ARTICULO', 'MONOGRAFIA', 'FINAL PREGRADO', 'FINAL ESPECIALIZACION'],
        required: [true, 'Nombre requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('TipoProyecto', TipoProyectoSchema)
