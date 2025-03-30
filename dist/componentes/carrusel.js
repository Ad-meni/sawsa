function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from "react";
var Carousel = /*#__PURE__*/function (_React$Component) {
  //con esto creamos la clase carousel donde tambien decimos
  //que es parte de un componente de react, dando acceso a aestos mismos
  function Carousel(props) {
    var _this;
    _classCallCheck(this, Carousel);
    //constructor donde inicializamos y ademas props tiene la lista
    //de imagenes/datos de estas para usarlos 
    _this = _callSuper(this, Carousel, [props]);
    //con esto aseguramos que props se conficgure como un metodo o componente
    //de component
    _this.state = {
      currentImageIndex: 0
      //inicialisamos currentimageindex como valor a 0
      //el valor de state cambia segun el valor de currentindex
    };
    _this.interval = null;
    //intervalo de cambio de imagen
    return _this;
  }
  _inherits(Carousel, _React$Component);
  return _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // Creamos un metodo como ciclo de vida donde se ejecuta justo despues que 
      //se monta el componente/imagen
      this.interval = setInterval(function () {
        //a interval le damos el valor de la funcion setinterval 
        _this2.setState(function (prevState) {
          return {
            //a setstate le mandamos prevstate esto para
            currentImageIndex: (prevState.currentImageIndex + 1) % _this2.props.images.length
            //con esto hacemos que el valor de la imagen que mostramos cambie y se aumente 
          };
        });
      }, 10000); // Cambia la imagen cada 10 segundos esto porque se aumenta en setstate el indice de imagen
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      //metodo 
      clearInterval(this.interval); // Limpia el intervalo para evitar fugas de imagenes o datos
    }
  }, {
    key: "render",
    value: function render() {
      //metodo render
      var images = this.props.images;
      var currentImageIndex = this.state.currentImageIndex;
      //le decimos que const images y currentimages es igual a thisprops y thisstate
      return (
        /*#__PURE__*/
        //regresamos
        React.createElement("div", {
          style: {
            width: "400px",
            height: "300px",
            overflow: "hidden"
          }
        }, images[currentImageIndex].media_type === "image" ? /*#__PURE__*/React.createElement("img", {
          src: images[currentImageIndex].url,
          alt: images[currentImageIndex].title
          //gracias a images que obtiene datos de el arreglo de imagenes
          //le decimos que la iamgen con indice x obtengamos url y titulo asi 
          //obteniendo la imagne asignandola a src
          ,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }) : /*#__PURE__*/React.createElement("p", null, images[currentImageIndex].title)
        //en un p mostramos el titulo de la imagen mostrada solamente si esta no se muestra
        )
      );
    }
  }]);
}(React.Component);
export default Carousel;