function contarRepeticiones(dato, array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === dato) {
      contador++;
    }
  }
  return contador;
}

function verificarRepeticiones(arrayInputs, arrayFrase, arrayTemp) {
  arrayInputs.map((t, i) => {
    if (
      contarRepeticiones(t.value, arrayFrase) ==
        contarRepeticiones(t.value, arrayTemp) &&
      t.style.backgroundColor != "rgb(50, 213, 11)"
    ) {
      t.style.backgroundColor = "#F53816";
      t.style.borderColor = "#F53816";
      t.style.color = "white";
    }
  });
}

export function verificarLetra(
  palabraEnJuego,
  intento,
  setPalabraSecreta,
  setLetrasAdivinadas,
) {
  let nodeListInputs;
  let arrayTemp = [];

  let contador = 0;
  console.log(palabraEnJuego)
  switch (intento) {
    case 1:
      nodeListInputs = document.querySelectorAll(".intento1");
      break;

    case 2:
      nodeListInputs = document.querySelectorAll(".intento2");
      break;

    case 3:
      nodeListInputs = document.querySelectorAll(".intento3");
      break;

    case 4:
      nodeListInputs = document.querySelectorAll(".intento4");
      break;

    case 5:
      nodeListInputs = document.querySelectorAll(".intento5");
      break;
  }

  const arrayInputs = Array.apply(null, nodeListInputs);
  const arrayFrase = palabraEnJuego.split("");

  arrayInputs.map((t, i) => {
    if (t.name == intento) t.disabled = true;

    if (arrayFrase[i] == t.value && t.name == intento) {
      t.style.backgroundColor = "#32D50B";
      t.style.borderColor = "#32D50B";
      t.style.color = "white";
      arrayTemp.push(t.value);

      setLetrasAdivinadas(contador += 1);

    } else if (arrayFrase.includes(t.value) && t.name == intento) {
      t.style.backgroundColor = "#F5D616";
      t.style.borderColor = "#F5D616";
      t.style.color = "white";
    } else if (!arrayFrase.includes(t.value) && t.name == intento) {
      t.style.backgroundColor = "#F53816";
      t.style.borderColor = "#F53816";
      t.style.color = "white";
    }

    if (contador == 5) {
      setPalabraSecreta(palabraEnJuego);
    }
  });
  verificarRepeticiones(arrayInputs, arrayFrase, arrayTemp);
}
