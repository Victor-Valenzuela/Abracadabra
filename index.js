const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use(express.static(path.join(__dirname + "/public/assets")));

app.get("/abracadabra/usuarios", (_req, res) => {
    res.sendFile(__dirname + '/public/json/usuarios.json');
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const { usuario } = req.params;
    console.log(usuario);
    const { usuarios } = require(__dirname + '/public/json/usuarios.json');
    usuarios.includes(usuario) ? next() : res.redirect('/who.jpeg');
})

app.get("/abracadabra/juego/:usuario", (_req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/abracadabra/conejo/:n", (req, res) => {
    const numero = Math.floor(Math.random() * (5 - 1)) + 1;
    const { n } = req.params;
    n == numero
        ? res.redirect('/conejito.jpg')
        : res.redirect('/voldemort.jpg')
});

app.use((_req, res) => {
    res.status(404).send("<center><h1>Esta página no existe &#128577 </h1> </center>");
})
