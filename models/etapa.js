const {Schema, model} = require('mongoose')

const EtapaSchema = Schema({
    nombre: {
        type: String,
        enum:['ANTEPROYECTO', 'ENTREGA PARCIAL 1', 'ENTREGA PARCIAL 2', 'FINAL'],
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

module.exports = model('Etapa', EtapaSchema)