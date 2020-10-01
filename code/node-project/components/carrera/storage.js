const db = require('mongoose')
const model = require('./model')

const uri = "mongodb+srv://ups:ups2020@cluster0.7kqtt.gcp.mongodb.net/<utups>?retryWrites=true&w=majority";

db.Promise = global.Promise
db.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: utups,

})
    .then((data)=>{console.log('[db] .Conectada con exito')})
    .catch((error)=>{console.error('[error log]'+error)})


const list = []

function addCarrera( objeto ) {
    list.push( objeto )
}

function getCarreras() {
    return list
}

function updateCarrera( objeto ) {
    for (let i=0; i<list.length; i++) {
        if (list[i].nombre == objeto.nombre) {
            list[i] = objeto
        }
    }
}

function deleteCarrera(nombre) {
    for (let i=0; i<list.length; i++) {
        if (list[i].nombre == nombre) {
            delete list[i]
        }
    }
}

module.exports = {
    add: addCarrera,
    get: getCarreras,
    update: updateCarrera,
    delete: deleteCarrera,
}
