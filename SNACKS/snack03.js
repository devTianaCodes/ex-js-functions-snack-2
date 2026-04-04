// Definisci una funzione eseguiOperazione che accetta tre parametri: 
// due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(a, b, operatore) {
    return operatore(a, b);
  }

  // Esempi
  const somma = (x, y) => x + y;
  const moltiplica = (x, y) => x * y;

  console.log(eseguiOperazione(3, 4, somma)); // 7
  console.log(eseguiOperazione(3, 4, moltiplica)); // 12