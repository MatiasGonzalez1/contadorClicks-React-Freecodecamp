import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import Logo from "./img/unnamed.png";
import { useState} from "react";

const App = ()=> {

  const[numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };
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
        <Contador numClicks={numClicks}/>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
