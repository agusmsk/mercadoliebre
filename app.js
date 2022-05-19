const express = require('express');
const path = require('path');

const app = express()

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath)); //aca le decimos a express cual es la carpeta de dominios publicos

app.listen(3000, ()=> {
    console.log("El servidor se encuentra corriendo en el puerto 3000")
} ); //ejecutamos el servidor en el puerto 3000

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
}); //redirecciona entrar a la raiz a home.html 

app.get("/register", (req, res) => {
  // añadimos el register.html
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  // añadimos el login.html
  res.sendFile(path.join(__dirname, "views/login.html"));
});