const express = require("express");
const path = require("path");
const app = express(); //constante app es igual a libreria express
const PORT = 3000;//puerto es 3000


app.use(express.static(path.join(__dirname, "dist")));
//obtenemos los archivos de la carpeta dist, aqui obtenemos la conversion para que el navegador acepte nuestro
//codigo hecho con React
app.use(express.static(path.join(__dirname, "img")));
//De aqui obtenemos la imagen que usamos para el logo


app.get("/", (req, res) => {
/*Con esto enviamos lo que el usuario necesite, aqui decimos que esto es a raiz osea algo principal
esto lo definimos con /, luego req que recibe lo que el usuario quiere y res que envia la respuesta */
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/logo.png" type="image/x-icon/png" />
      <title>Materialize Dreams</title>
    </head>
    <body>
      <div id="root"></div> <!-- Le damos una id a este div -->
      <script src="bundle.js"></script> <!-- Archivo generado por Webpack donde afecta a el div root -->
      <!-- Con esto mostramos todo lo que se convierta en el bundle -->
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`corriendo dentro de: http://localhost:${PORT}`));
//app.listen inicia un servidor gracias a express
//decimos que esto recibe un puerto y ademas envia a consola un mensaje de que
//el servidor esta corriendo en (url de el localhost)