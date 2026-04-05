// Scrivi una funzione creaThrottler che accetta 
// una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata 
// ripetutamente, esegue l'operazione originale al massimo 
// una volta ogni n millisecondi.


function creaThrottler(funzione, limite) {
    let ultimaEsecuzione = 0;

    return function () {
      const adesso = Date.now();

      if (adesso - ultimaEsecuzione >= limite) {
        funzione();
        ultimaEsecuzione = adesso;
      }
    };
  }

  // Esempio
  function saluta() {
    console.log("Ciao!");
  }

  const throttledSaluta = creaThrottler(saluta, 2000);

  throttledSaluta();
  throttledSaluta();
  throttledSaluta();