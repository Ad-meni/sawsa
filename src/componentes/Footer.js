import React from "react";

//Crearemos constantes que almacenan los estilos de css de las etiquetas react

const footer_estilo = {
  display: "flex",
  //Hacemos que todos los elementos dentro del footer 
  //solo se puedan ajustar dentro de este espacio asi no sobresalen de el div
  justifyContent: "space-between",
  //tipo de espacio entre los elementos
  alignItems: "center",
  //los coloca de forma vertical y en fila/linea
  backgroundColor: "#fffff0",
  //color de el fondo de footer
  border: "1px solid black",
  //borde solido 1 pixel y negro
  borderRadius: "5px",
  //borde 5px mas redondo
  padding: "10px 20px",
  //relleno entre el contenido y los bordes
  position: "fixed",
  //posicion fixed para que siempre se vea abajo
  //sin importar si bajas en la pestana
  bottom: "7px",
  left: "7px",
  right: "7px",
  //ajustamos que el nivel de separacion de derecha izquierda y arriba sea siempre de 7px
  boxSizing: "border-box", // Asegura que padding y bordes bno sobresalgan de mass
};
//se puso hacer responsibo gracias a el boxsising y el display junto con los
//derecha izq y abajo pues definieron propiedades de tamano que ayudaron a que este
//se mantenga en su tamano de forma que no afecte a mas contenidos

const creditos_estilo = {
  display: "flex",
  flexDirection: "row", 
  // usamos row para que esten en fila todo lo que este aqui 
  gap: "15px", 
  //espacio entre los elementos
  alignItems: "center",
  //siempre en el centro
  textAlign: "left",
  //los aliniamos a la izq
  color: "#094293",
  //color azuk
  fontSize: "90%", //tamano de letra
};

const redes_estilo = {
  display: "flex",
  //siempre ocupen el mismo estilo
  gap: "15px", // Espacio entre botons
};

const boton_red_social = {
  backgroundColor: "#094293", 
  //boton color azul
  border: "1px solid #094293",
  //borde color y solido de 1 px
  color: "White",
  //color blanco
  fontWeight: "bold",
  //negrita
  fontSize: "90%",
  //tamano
  borderRadius: "5px", 
  //bordes redondos
  padding: "8px 15px", 
  //relleno interno de izquierda y arriba de 15px
  textDecoration: "none", 
  //sin decoracion osea subrallados poquito jja
  cursor: "pointer",
  //cursor ocn manita
  textAlign: "center",
  //aliniamos el texto a el centro
};

function Footer() {
    //creamos una funcion para el footer para regresar estos valores osea el html
    return (
      //regresa el html
      <footer style={footer_estilo}>
        {/* a las etiquetas les damos estilos con las constantes con codigo css*/}
        <div style={creditos_estilo}>
          <a 
            href="https://api.nasa.gov/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#094293", fontWeight: "bold" }}
            //no vi necesario otra constante nomas para esto asi que lo ingrese dentro
          >
            NASA API POD
          </a>
          <a 
            href="https://www.twilio.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#094293", fontWeight: "bold" }}
          >
            Twilio API
          </a>
        </div>
  
        {/* Botones de las redes sociales mias y de mi colder */}
        <div style={redes_estilo}>
          <a
            href="https://www.instagram.com/diaz.albertov.25/"
            target="_blank"
            rel="noopener noreferrer"
            style={boton_red_social}
          >
            Alberto D.
          </a>
          <a
            href="https://www.instagram.com/ariel_r3i/"
            target="_blank"
            rel="noopener noreferrer"
            style={boton_red_social}
          >
            Asiel R.
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;