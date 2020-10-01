const mongoose = require('mongose')
const schema = mongoose.Schema

const mySchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    descripcion: String,
})

const model = mongoose.model('Carrera', mySchema)
module.exports = model
