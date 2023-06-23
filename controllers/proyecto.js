const { request, response } = require('express')
const Proyecto = require('../models/proyecto')
const Cliente = require('../models/cliente')
const TipoProyecto = require('../models/tipoProyecto')
const Universidad = require('../models/universidad')
const Etapa = require('../models/etapa')

//listar todos
const getProyectos = async (req = request,
    res = response) => {
    try {
        console.log('Peticion...')
        const proyectos = await Proyecto.find()//select * from inventarios
            .populate({
                path: 'cliente'
            })
            .populate({
                path: 'tipoProyecto'
            })
            .populate({
                path: 'universidad'
            })
            .populate({
                path: 'etapa'
            })
        return res.json(proyectos)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

// crear
const createProyecto = async (req = request,
    res = response) => {
    try {

        const data = req.body;
        console.log(data);

        const { cliente, tipoProyecto, universidad, etapa } = data;
        //validando usuario
        const clienteSB = Cliente.findOne({ _id: cliente._id })// select * from cliente where _id=?
        if (!clienteSB) {
            return res.status(400).json({ msg: 'cliente invalido' });
        }

        // validando marca
        const tiposDB = TipoProyecto.findOne({ _id: tipoProyecto._id })// select * from marcas where _id=? and estado=true
        if (!tiposDB) {
            return res.status(400).json({ msg: 'Tipos de proyecto invalido' });
        }
        // validando estado
        const universidadDB = Universidad.findOne({ _id: universidad._id })// select * from estados where _id=? and estado=true
        if (!universidadDB) {
            return res.status(400).json({ msg: 'Universidad invalido' });
        }
        // validando tipo equipo
        const etapaDB = Etapa.findOne({ _id: etapa._id });// select * from tipoequipos where _id=? and estado=true
        if (!etapaDB) {
            return res.status(400).json({ msg: 'Etapa invalido' }); 
        }

        const proyecto = new Proyecto(data);
        await proyecto.save();
        return res.status(201).json(proyecto);

    } catch (e) {
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

// actualizar inventario
const updateProyecto = async (req = request,
    res = response) => {

    try {
        const { id } = req.params
        const data = req.body
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(proyecto)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ msj: 'Error' })
    }

}


module.exports = { getProyectos, createProyecto, updateProyecto }