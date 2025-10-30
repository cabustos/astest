
// funciona para encontrar la palabra mas larga en una cade de texto

function palabraMasLarga(texto) {
    // validar que el texto no este vacio y sea string
  if (typeof texto !== "string" || texto.trim() === "") {
    return null; 
  }

  // Divide por el caracter espacio las palabras y las guarda en un array
  const palabras = texto.split(" ");
  let palabraMasLarga = "";

  // se recorre el array de palabras para encontrar la palabra mas larga

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }

  return palabraMasLarga;
}