function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
var containerEstilo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "20px"
};
var formularioEstilo = {
  backgroundColor: "#fffff0",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "20px",
  width: "400px",
  boxSizing: "border-box",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
};
var inputEstilo = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px"
};
var textareaEstilo = _objectSpread(_objectSpread({}, inputEstilo), {}, {
  // Hereda los estilos del input
  height: "120px",
  // Altura específica para el textarea
  width: "100%",
  resize: "none" // Evita que el usuario cambie el tamaño
});
var botonEstilo = {
  width: "100%",
  // Igual que los inputs para alinearlos
  padding: "10px",
  backgroundColor: "#094293",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px" // Coincide con el tamaño de los inputs y textarea
};
function Contactanos() {
  var _useState = useState({
      nombre: "",
      email: "",
      mensaje: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formulario = _useState2[0],
    setFormulario = _useState2[1];
  //creamos constantes formulario y setformulario donde usamos nombre,email y mensaje, que son propiedades como bacias

  var handleChange = function handleChange(e) {
    //constante handle es igual a funcion donde e para enviar forumalio
    setFormulario(_objectSpread(_objectSpread({}, formulario), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    // Enviar el correo
    emailjs.send("Mat_Dreams", "template_ln7pw1b", {
      //le enviamos mediante el servicio de id, y su plantilla
      nombre: formulario.nombre,
      email: formulario.email,
      mensaje: formulario.mensaje
    }, "rDSgsFXucmKv7nSni" //clave de api
    ).then(function (response) {
      alert("Correo enviado, en 48 horas te responderemos");
      console.log("Correo enviado:", response);
    })["catch"](function (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo.");
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    activo: "contactanos"
  }), /*#__PURE__*/React.createElement("div", {
    style: containerEstilo
  }, /*#__PURE__*/React.createElement("form", {
    style: formularioEstilo,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      color: "#094293"
    }
  }, "Contactanos"), /*#__PURE__*/React.createElement("input", {
    style: inputEstilo,
    type: "text",
    name: "nombre",
    placeholder: "Tu nombre",
    value: formulario.nombre,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    style: inputEstilo,
    type: "email",
    name: "email",
    placeholder: "Tu correo ",
    value: formulario.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("textarea", {
    style: {
      textareaEstilo: textareaEstilo
    },
    name: "mensaje",
    placeholder: "Ingresa Tu idea dentro de 48 horas te responderemos",
    value: formulario.mensaje,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    style: botonEstilo,
    type: "submit"
  }, "Enviar"))), /*#__PURE__*/React.createElement(Footer, null));
}
export default Contactanos;