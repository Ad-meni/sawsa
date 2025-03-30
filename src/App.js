import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conocenos from "./componentes/conocenos"; // Ajusta la ruta según tu proyecto
import Contactanos from "./componentes/contactanos"; // Ajusta la ruta según tu proyecto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Conocenos />} /> {/* pagina principal */}
        <Route path="/contactanos" element={<Contactanos />} /> {/* Pagina de contacto */}
      </Routes>
    </Router>
  );
}
//con esto creamos rutas para navegar entre las pestanas

export default App;