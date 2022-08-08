import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    //console.log(3, "El componente ha sido eliminado del Dom");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    //console.log(0, "El componente se inicializa, aun no esta en el Dom");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    // console.log(1, "El componente ya se encuentra en el Dom");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps, "estado previo", prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };
  render() {
    /* console.log(
      4,
      "el componente se dibuja o redibuja por algun cambio en el dom"
    ); */
    return (
      <>
        <h2> Ciclo de vida de los Componentes de clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
