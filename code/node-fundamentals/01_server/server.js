const express = require('express')

const router = express.Router()

var app = express()
app.use( router )

router.get('/carrera', function(req, res){
       //console.log ( req.body )
       //console.log ( re.query )
       res.send('Lista de carreras')

})

app.use('/',express.static('public'))
app.listen(5000)
console.log('La aplicacion esta escuchando en http://localhost:5000')
