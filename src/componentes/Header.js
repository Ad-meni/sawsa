import React from "react";
import { Link } from "react-router-dom";
//Crearemos constantes que almacenen los estilos de css de las etiquetas react
const header_estilo = {
  display: "flex",
  //Hacemos que tidi lo que pongasmo dentro de el headr este en linea
  justifyContent: "space-between",
  //tipo de espacio ente los elementos
  alignItems: "center",
  //los coloca de forma vertical 
  backgroundColor: "#fffff0",
  //color de el fondo de encabezad
  border: "1px solid black",
  //borde solido 1 pixel y negro
  borderRadius: "5px",
  //borde 5px mas redondo
  padding: "10px 20px",
  //relleno entre el contenido y los bordes

  left: "7px", // Alinea al mismo nivel izquierdo que el header
  right: "7px",//tambien el derecho a 7px de distancia
  boxSizing: "border-box", // Asegura que padding y bordes no sobresalgan
};

const title_estilo = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left", //los alinia de el lado izquierdo
  color: "#094293",//color de el texto
};

const h1_estilo = {
  fontSize: "150%", //tamano de 150porciento
  margin: "0", // Sin margen
};

const sub_estilo = {
  fontSize: "90%",
  fontWeight: "bold", //letra negrita
  margin: "5px 0 0 0", 
  //margen 0 arriba, derechia y  abajo pero izquierdo es 5px 
};

const botonSinUsar = {

  backgroundColor: "transparent",
  //boton color transparente
  border: "none",
  color: "#094293",
  fontWeight: "bold",
  fontSize: "90%",
  marginLeft: "15px", // Espacio de 15px entre botones
  cursor: "pointer", //cursor cambia a manita jaja
};

const botonUsado = {
  ...botonSinUsar,
  //con esto obtenemos todos los estilos de el anterior boton
  backgroundColor: "#094293",
  //cambiamos el color de fondo
  color: "#fffff0",
  //letras blancas
  borderRadius: "5px",
  //bordes redondos
  padding: "5px 10px",
  //agrega relleno a el boton activo
};

function Header({activo}) {
  //creamos una funcion para exportarla a donde la llamen
  return (
    //regresa esta linea de comandos
    <header style={header_estilo}> 
      {/* Creamos la etiqueta header y le damos su estilo segun una constante con codigo css*/}
      <div style={title_estilo}>
        {/* estilo de el div */}
        <h1 style={h1_estilo}>Materialize Dreams</h1>
        {/* estilo de h1 */}
        <p style={sub_estilo}>Making people's lives more amazing</p>
        {/* estilo de p */}
      </div>

      {/* bOtones */}
      <nav>
        <Link to="/" style={activo === "conocenos" ? botonUsado : botonSinUsar}>
          Conocenos
        </Link>
        <Link
          to="/contactanos"
          style={activo === "contactanos" ? botonUsado : botonSinUsar}
        >
          Contactanos
        </Link>
        <Link to="/donaciones" style={activo === "donaciones" ? botonUsado : botonSinUsar}>
          Donaciones
        </Link>
        {/*Con esto hacemos que si activo es igual a x entonces se muestra la primera opcion pero si no lo es se muestra la segunda*/}
      </nav>

    </header>
  );
}

export default Header;