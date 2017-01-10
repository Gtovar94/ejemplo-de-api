var express = require("express")

var app = express()               

var port = process.env.PORT || 8080

app.get("/", function(req, res) {
	res.json({ mensaje: "¡Hola Mundo!" })
})

app.listen(port)
console.log("Api escuchando en el puerto " + port)