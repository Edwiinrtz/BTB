//Express
const express = require('express');
const app = express();

//Stripe configuracion
const stripe = require('stripe')('sk_test_djRuL9jORUrui8gt5NswPETD00ZHChjwRv');

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

app.post('/donacion', async (req,res)=>{
	
	const paymentIntent = await stripe.paymentIntents.create({
  		amount: 1099,
  		currency: 'usd',
		// Verify your integration in this guide by including this parameter
		metadata: {integration_check: 'accept_a_payment'},
	});
	console.log(paymentIntent)
	res.render('donacion',{
		client_secret:paymentIntent.client_secret
	})
})


app.listen(3000);

console.log('listening on port: 3000');