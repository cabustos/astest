function parentesisBalanceados(cadena) {
    // se valida que cadena sea un string
    if (typeof cadena !== "string") return false;

    const pila = [];
    
    // se recorre cada caracter de la cadena  para encontrar los parentesis

    for (let char of cadena) {
    if (char === "(") {
      pila.push(char); // agregamos cuando encontramos "("
    } else if (char === ")") {
      // si encontramos ")", debemos tener un "(" previo
      if (pila.length === 0) return false;
      pila.pop(); // retiramos el último "("
    }
  }

    return pila.length === 0;
}

// ejemplos de uso:
console.log(parentesisBalanceados("(a+b)"));        
console.log(parentesisBalanceados("((1+2)*(3+4))")); 
console.log(parentesisBalanceados("(a+b*(c-d)"));    
console.log(parentesisBalanceados(")("));            