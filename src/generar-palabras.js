//Genera un numero random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Genera una palabra random
export function generarPalabra() {
  const palabraFinal = [
    "RESTA",
    "FRESA",
    "MANOS",
    "PARED",
    "RUEDA",
    "PANZA",
    "COLOR",
    "CIELO",
    "LUGAR",
    "FRUTA",
    "NIEVE",
    "LENTE",
    "NUBES",
    "PERRO",
    "LUCHA",
    "SALUD",
    "LUCHA",
  ];

  let random = getRandomInt(palabraFinal.length);
  return palabraFinal[random];
}
