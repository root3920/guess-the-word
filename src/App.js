import "./App.css";
import Boton from "./components/Boton";
import Tablero from "./components/Tablero";
import { verificarLetra } from "./verificar-letra";
import { generarPalabra } from "./generar-palabras";
import { styled } from "styled-components";
import { useState } from "react";

function App() {
  const [palabraEnJuego, setPalabraEnJuego] = useState(generarPalabra());
  const [palabraSecreta, setPalabraSecreta] = useState("????");
  const [letrasAdivinadas, setLetrasAdivinadas] = useState(0);
  const [intento, setIntento] = useState(1);

  //Reinicia el juego
  const reiniciarJuego = () => {
    setPalabraEnJuego(generarPalabra());
    setIntento(1);
    setPalabraSecreta("????");
    setLetrasAdivinadas(0);
    let campos = document.querySelectorAll(".campo");

    campos.forEach((campo) => {
      campo.value = "";
      campo.style.backgroundColor = "white";
      campo.style.borderColor = "black";
      campo.style.color = "black";
      campo.disabled = false;
    });
  };

  //Verifica la palabra
  const verificarPalabra = () => {
    if (intento == 5) {
      setPalabraSecreta(palabraEnJuego);
    }

    verificarLetra(
      palabraEnJuego,
      intento,
      setPalabraSecreta,
      setLetrasAdivinadas,
      letrasAdivinadas
    );
    setIntento(intento + 1);
  };

  return (
    <div className="App">
      <Contenedor>
        <p>Palabra secreta: {palabraSecreta}</p>
        <p>Intento: {intento - 1}</p>
      </Contenedor>
      <Contenedor>
        <h1>GUESS THE WORD</h1>
        <Tablero />
        <div
          style={{
            padding: "10px",
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Boton accion={verificarPalabra} titulo="Verificar" />
          <Boton accion={reiniciarJuego} titulo="Reiniciar" />
        </div>
      </Contenedor>
      <Contenedor>
        <p>Palabras adivinadas: {letrasAdivinadas}</p>
      </Contenedor>
    </div>
  );
}

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default App;
