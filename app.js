//Creando primera app de express

//Usando objeto express
const express = require('express')
//App de express
const app = express()
//Puerto en vamos a ver nuestra app: localhost: 3000
const port = 3000

//path inicial, responderá a la url localhost: 3000
app.get('/', (req, res) =>{
	res.send("Welcome to Axl's Server")
})

//regresando objeto
//Localhost: 300/exploresrInNode
app.get('/explorersInNode', (req, res) =>{
	const explorer = {name: "Explorer", msg: "Hello"}
	res.send(explorer)
})

//Query params: Recibir parámetros por la url
// http://localhost:3000/explorers/carlo
//req.params = {"explorerNAme":"carlo"}
app.get('/explorers/:explorerName', (req, res) =>{
	res.send(req,params)
})



// Comando para inicializar app
app.listen(port, () => {
	console.log('Example app listening on port ${port}')
})
