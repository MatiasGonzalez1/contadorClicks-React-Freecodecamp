import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import Logo from "./img/unnamed.png";
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numClicks:0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick(){
    this.setState(({numClicks})=>({numClicks: numClicks + 1}));
  }

  reiniciarContador(){
    this.setState({numClicks:0})
  }


  render(){
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={Logo}
            alt="Logo de freecodecamp"
          />
        </div>
        <div className="contenedor-contador">
          <Contador numClicks={this.state.numClicks}/>
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
