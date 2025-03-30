import React from "react";

class Carousel extends React.Component {
  //con esto creamos la clase carousel donde tambien decimos
  //que es parte de un componente de react, dando acceso a aestos mismos
  constructor(props) {
    //constructor donde inicializamos y ademas props tiene la lista
    //de imagenes/datos de estas para usarlos 
    super(props);
    //con esto aseguramos que props se conficgure como un metodo o componente
    //de component
    this.state = {
      currentImageIndex: 0, 
      //inicialisamos currentimageindex como valor a 0
      //el valor de state cambia segun el valor de currentindex
    };
    this.interval = null; 
    //intervalo de cambio de imagen
    
  }

  componentDidMount() {
    // Creamos un metodo como ciclo de vida donde se ejecuta justo despues que 
    //se monta el componente/imagen
    this.interval = setInterval(() => {
      //a interval le damos el valor de la funcion setinterval 
      this.setState((prevState) => ({
        //a setstate le mandamos prevstate esto para
        currentImageIndex: (prevState.currentImageIndex + 1) % this.props.images.length,
        //con esto hacemos que el valor de la imagen que mostramos cambie y se aumente 
      }));
    }, 10000); // Cambia la imagen cada 10 segundos esto porque se aumenta en setstate el indice de imagen
  }

  componentWillUnmount() {
    //metodo 
    clearInterval(this.interval); // Limpia el intervalo para evitar fugas de imagenes o datos
  }

  render() {
    //metodo render
    const { images } = this.props;
    
    const { currentImageIndex } = this.state;
    //le decimos que const images y currentimages es igual a thisprops y thisstate
    return (
      //regresamos
      <div style={{ width: "400px", height: "300px", overflow: "hidden" }}>
        {images[currentImageIndex].media_type === "image" ? (
          <img
            src={images[currentImageIndex].url}
            alt={images[currentImageIndex].title}
            //gracias a images que obtiene datos de el arreglo de imagenes
            //le decimos que la iamgen con indice x obtengamos url y titulo asi 
            //obteniendo la imagne asignandola a src
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          
        ) : (
          <p>{images[currentImageIndex].title}</p>
          //en un p mostramos el titulo de la imagen mostrada solamente si esta no se muestra
        )}
      </div>
    );
  }
}

export default Carousel;