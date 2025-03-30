import React, { useState, useEffect } from "react";
import nasaAPI from "../../APIS/export"; // Importa la instancia de Axios
import Carousel from "./carrusel"; // Importa el carrusel
import Header from "./Header"; // Importa 
import Footer from "./Footer";

const container_estilo = {
  paddingBottom: "60px", // 
  textAlign: "center", // 
};

const main_estilo = {
  //esto es lo principal
  display: "flex",
  alignItems: "flex-start",
  marginTop: "20px",
  padding: "20px",
};

const izquierda_estilo = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
};

const derecha_estilo = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "15px", // Espaciado entre titulos  u parafso
  alignItems: "flex-start",
};

const debajo_estilo = {
  marginTop: "40px", 
  textAlign: "center", 
};

const titulo_estilo = {
  color: "#094293",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "left",
};

const parrafo_estilo = {
  fontSize: "1rem",
  color: "#333",
  textAlign: "justify",
  lineHeight: "1.6", 
  wordWrap: "break-word", 
  width: "100%", 
};

function Conocenos() {
  //funcion conocenos
  const [images, setImages] = useState([]);
//constantes images y set images que usan el metodo de react de useState como arreglo
  useEffect(() => {
    //usamos el metodo usefect de react
    async function fetchImages() {
      //funcion asincrona fectchimages
      try {
        //lo primero en ejecutar
        const response = await nasaAPI.get("", { params: { count: 1 } }); 
        //constanteresponse es igual a esperar una respuesta de nasaApi obteniendo
        //asi los parametros iniciando que obtengamos de 1 en uno osea la primera
        setImages(response.data);
        //seleccionamos imagenes obteniendo datos de la constante response de nasaAPI
      } catch (error) {
        //si no se obtiene, osea da error, el error de el try se guarda en el el error de catch
        console.error("Error al obtener imagen de nasaAPI:", error);
        //le mostramos al usuario que no pudimos obtener la imagen
      }
    }

    fetchImages();
    //llamamos a la funcion asincrona fectfimagens
  }, []);

  return (
    <div style={container_estilo}>
      <Header activo="conocenos"/>

      {/* Seccion de imagen */}
      <div style={main_estilo}>
        {/* Imageen a la izquerda */}
        <div style={izquierda_estilo}>
          {images.length > 0 ? (
            <Carousel images={images} />
          ) : (
            <p style={{ textAlign: "center" }}>Cargando imagen...</p>
          )}
          {/*Por medio de la constante images llamamos a la funcion
          useState donde la usamos para saber si es mayor que 0 y si
          es mayor que sero llamamos a carousel de y le enviamos como parametro
          la constante images asi mostrando imagenes y si aun no es mayor que 0, le decimos
          que estan cargando imagenes*/}
        </div>

        {/* textos mostrados a la derecha de la imagen*/}
        <div style={derecha_estilo}>
          <h2 style={titulo_estilo}>Que somos</h2>
          <p style={parrafo_estilo}>
            Somos una empresa innovadora que busca transformar sueños en proyectos reales. Estamos comprometidos con crear soluciones tecnológicas que impacten positivamente en la vida de las personas.
          </p>

          <h2 style={titulo_estilo}>Que hacemos</h2>
          <p style={parrafo_estilo}>
            Trabajamos en la conceptualización, desarrollo y ejecución de ideas que parecían imposibles. Desde aplicaciones funcionales hasta proyectos creativos, hacemos que todo sea alcanzable.
          </p>
        </div>
      </div>

      {/* Seccion debajo de la imagen */}
      <div style={debajo_estilo}>
        <h2 style={titulo_estilo}>Porque lo hacemos</h2>
        <p style={parrafo_estilo}>
          Nuestra misión es contribuir a un mundo mejor, inspirándonos en los sueños y necesidades de las personas. Creemos en la capacidad de hacer realidad cualquier visión que nos impulse hacia adelante.
        </p>

        <h2 style={titulo_estilo}>Motivación</h2>
        <p style={parrafo_estilo}>
          Lo que nos motiva es la idea de un futuro más cómodo y tecnológicamente avanzado. Queremos que cada individuo disfrute de un mundo más funcional y lleno de posibilidades, envianos tu idea por medio de la opcion contactanos y hablaremos contigo para ayudarte.
        </p>
      </div>

      <Footer />
      {/* Con esto mostramos el footer */}
    </div>
  );
}

export default Conocenos;

