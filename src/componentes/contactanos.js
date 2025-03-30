import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";

const containerEstilo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", 
  padding: "20px",
};
const formularioEstilo = {
    backgroundColor: "#fffff0",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "400px",
    boxSizing: "border-box",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
  };
const inputEstilo = {
    width: "100%", 
    boxSizing: "border-box", 
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px", 
  };
  
  const textareaEstilo = {
    ...inputEstilo, // Hereda los estilos del input
    height: "120px", // Altura específica para el textarea
    width: "100%",
    resize: "none", // Evita que el usuario cambie el tamaño
  };
  
  const botonEstilo = {
    width: "100%", // Igual que los inputs para alinearlos
    padding: "10px",
    backgroundColor: "#094293",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px", // Coincide con el tamaño de los inputs y textarea
  };
function Contactanos() {
    const [formulario, setFormulario] = useState({
      nombre: "",
      email: "",
      mensaje: "",
    });
    //creamos constantes formulario y setformulario donde usamos nombre,email y mensaje, que son propiedades como bacias
  
    const handleChange = (e) => {
        //constante handle es igual a funcion donde e para enviar forumalio
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Enviar el correo
      emailjs
        .send(
          "Mat_Dreams",       
          "template_ln7pw1b",      
          {
            //le enviamos mediante el servicio de id, y su plantilla
            nombre: formulario.nombre,
            email: formulario.email,
            mensaje: formulario.mensaje,
          },
          "rDSgsFXucmKv7nSni"           //clave de api
        )
        .then((response) => {
          alert("Correo enviado, en 48 horas te responderemos");
          console.log("Correo enviado:", response);
        })
        .catch((error) => {
          console.error("Error al enviar el correo:", error);
          alert("Hubo un error al enviar el correo.");
        });
    };
  
    return (
      <div>
        <Header activo="contactanos" />
        <div style={containerEstilo}>
          <form style={formularioEstilo} onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center", color: "#094293" }}>Contactanos</h2>
            <input
              style={inputEstilo}
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
            />
            <input
              style={inputEstilo}
              type="email"
              name="email"
              placeholder="Tu correo "
              value={formulario.email}
              onChange={handleChange}
              required
            />
            <textarea
              style={{ textareaEstilo }}
              name="mensaje"
              placeholder="Ingresa Tu idea dentro de 48 horas te responderemos"
              value={formulario.mensaje}
              onChange={handleChange}
              required
            />
            <button style={botonEstilo} type="submit">Enviar</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
  

export default Contactanos;