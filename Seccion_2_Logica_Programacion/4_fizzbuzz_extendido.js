/*

Ejercicio 4: FizzBuzz extendido Imprime los números del 1 al 100 según la regla Fizz, Buzz, FizzBuzz (y solo positivos). 

*/

function fizzBuzzExtendido(n) {
    // se valida que n sea un número entero positivo
    if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
        return "Entrada inválida";
    }
    
    const resultado = [];

    for (let i = 1; i <= n; i++) {
        // se determina si es Fizz, Buzz, FizzBuzz o el número mismo
        const salida =
            i % 15 === 0 ? "FizzBuzz" :
            i % 3 === 0 ? "Fizz" :
            i % 5 === 0 ? "Buzz" :
            i;

        // se agrega el resultado al array        
        resultado.push(salida);
    }

    // se devuelve el resultado
    return resultado;
}

// ejemplos de uso:
console.log(fizzBuzzExtendido(15));
console.log(fizzBuzzExtendido(20));
