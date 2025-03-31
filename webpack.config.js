
const path = require("path");
//obtiene propiedades/funciones de la libreria path

const Dotenv = require("dotenv-webpack"); 


module.exports = {
//Con esto decimos o indicamos como empaquetar el codigo,
//esto es necesario para que al empaquetarse se haga de forma que el navegador
//entienda el codigo y pueda correrlo
  plugins: [new Dotenv()],
  entry: "./src/index.js", 
  //esto sera lo primero que analizara y empaquetara todo lo necesario dentro
  //de el archivo empaquetado
  output: {
  //con esto definimos a donde ira nuestro archivo empaquetado
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js" // El nombre de el archivo empaquetado que le damos
  },
  module: {
  //aqui indicamos cuales archvios procesar/empaquetar y cuales no  
    rules: [
      {
        //el test es el tipo de archivo que se empaqueta, osea todos los js
        test: /\.js$/,
        //el exclude indica que la carpeta node_modules no se incluye
        exclude: /node_modules/,
        use: {
          //esto es lo importante, aqui indicamos que usemos laber-loader
          //para convertir el codigo js moderno y el react en algo
          //compatible con navegadores
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: "development"//con esto indicamos que incluya herramientas de apoyo y desarrollo
  //para el codigo comtenid
}