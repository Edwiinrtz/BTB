//Express
const express = require('express');
const app = express();


//Engine - HBS
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//Funciones de redireccionamiento
app.get('/', function (req, res) {
	res.render('index');
})	

app.post('/', async function (req, res) {
	cantidad = req.body.cantidad_dolares
	
})

app.listen(3000);

console.log('listening on port: 3000');