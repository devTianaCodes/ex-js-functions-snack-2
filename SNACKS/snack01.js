// Crea una funzione dichiarativa chiamata somma che accetta due numeri 
// e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata 
// a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.


// 1. Funzione dichiarativa
  function somma(a, b) {
    return a + b;
  }
//2. Funzione anonima
  const sommaAnonima = function (a, b) {
    return a + b;
  };
//3.Arrow function
  const sommaArrow = (a, b) => a + b;

  
  console.log(somma(2, 3));
  console.log(sommaAnonima(4, 6));
  console.log(sommaArrow(1, 9));