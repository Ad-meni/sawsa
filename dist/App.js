import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conocenos from "./componentes/conocenos"; // Ajusta la ruta según tu proyecto
import Contactanos from "./componentes/contactanos"; // Ajusta la ruta según tu proyecto

function App() {
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Conocenos, null)
  }), " ", /*#__PURE__*/React.createElement(Route, {
    path: "/contactanos",
    element: /*#__PURE__*/React.createElement(Contactanos, null)
  }), " "));
}
//con esto creamos rutas para navegar entre las pestanas

export default App;