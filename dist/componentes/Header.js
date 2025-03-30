function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from "react";
import { Link } from "react-router-dom";
//Crearemos constantes que almacenen los estilos de css de las etiquetas react
var header_estilo = {
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

  left: "7px",
  // Alinea al mismo nivel izquierdo que el header
  right: "7px",
  //tambien el derecho a 7px de distancia
  boxSizing: "border-box" // Asegura que padding y bordes no sobresalgan
};
var title_estilo = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  //los alinia de el lado izquierdo
  color: "#094293" //color de el texto
};
var h1_estilo = {
  fontSize: "150%",
  //tamano de 150porciento
  margin: "0" // Sin margen
};
var sub_estilo = {
  fontSize: "90%",
  fontWeight: "bold",
  //letra negrita
  margin: "5px 0 0 0"
  //margen 0 arriba, derechia y  abajo pero izquierdo es 5px 
};
var botonSinUsar = {
  backgroundColor: "transparent",
  //boton color transparente
  border: "none",
  color: "#094293",
  fontWeight: "bold",
  fontSize: "90%",
  marginLeft: "15px",
  // Espacio de 15px entre botones
  cursor: "pointer" //cursor cambia a manita jaja
};
var botonUsado = _objectSpread(_objectSpread({}, botonSinUsar), {}, {
  //con esto obtenemos todos los estilos de el anterior boton
  backgroundColor: "#094293",
  //cambiamos el color de fondo
  color: "#fffff0",
  //letras blancas
  borderRadius: "5px",
  //bordes redondos
  padding: "5px 10px"
  //agrega relleno a el boton activo
});
function Header(_ref) {
  var activo = _ref.activo;
  //creamos una funcion para exportarla a donde la llamen
  return (
    /*#__PURE__*/
    //regresa esta linea de comandos
    React.createElement("header", {
      style: header_estilo
    }, /*#__PURE__*/React.createElement("div", {
      style: title_estilo
    }, /*#__PURE__*/React.createElement("h1", {
      style: h1_estilo
    }, "Materialize Dreams"), /*#__PURE__*/React.createElement("p", {
      style: sub_estilo
    }, "Making people's lives more amazing")), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(Link, {
      to: "/",
      style: activo === "conocenos" ? botonUsado : botonSinUsar
    }, "Conocenos"), /*#__PURE__*/React.createElement(Link, {
      to: "/contactanos",
      style: activo === "contactanos" ? botonUsado : botonSinUsar
    }, "Contactanos"), /*#__PURE__*/React.createElement(Link, {
      to: "/donaciones",
      style: activo === "donaciones" ? botonUsado : botonSinUsar
    }, "Donaciones")))
  );
}
export default Header;