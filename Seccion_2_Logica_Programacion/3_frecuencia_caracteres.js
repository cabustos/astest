/*

Ejercicio 3 para contar la frecuencia de caracteres en una cadena de texto

*/


function contarFrecuenciaCaracteres(cadena) {   
    // se valida que cadena sea un string
    if (typeof cadena !== "string") return {};

    const frecuencia = {};

    // se recorre cada caracter de la cadena para contar su frecuencia

    for (let char of cadena) {
        // ignorar espacios
        if (char === " ") continue;

        // si el caracter ya existe en el objeto, incrementa su contador
        if (frecuencia[char]) {
            frecuencia[char]++;
        } else {
            // si no existe, inicializa su contador en 1
            frecuencia[char] = 1;
        }
    }

    return frecuencia;
}

// ejemplos de uso:
console.log(contarFrecuenciaCaracteres("hola mundo"));
console.log(contarFrecuenciaCaracteres("programacion"));
console.log(contarFrecuenciaCaracteres("aaabbbccc"));