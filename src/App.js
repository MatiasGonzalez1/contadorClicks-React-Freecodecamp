import "./App.css";
import Boton from "./components/Boton";
import Logo from "./img/unnamed.png";

const App = ()=> {
  const manejarClick = () => {
    console.log("Clic");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
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
