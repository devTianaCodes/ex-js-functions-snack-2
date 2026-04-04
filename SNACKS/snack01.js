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