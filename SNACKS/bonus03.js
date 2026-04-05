// Scrivi una funzione creaThrottler che accetta 
// una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata 
// ripetutamente, esegue l'operazione originale al massimo 
// una volta ogni n millisecondi.


function creaThrottler(funzione, limite) {
    let ultimaEsecuzione = 0;

    return function (...args) {
      const adesso = Date.now();

      if (adesso - ultimaEsecuzione >= limite) {
        
        ultimaEsecuzione = adesso;
        funzione(...args);
      }
      else {
        console.log("esecuzione ignorata");
      }
    }
  }

  

  const throttledSaluta = creaThrottler(() => console.log("Ciao") , 1000);

  throttledSaluta();
  throttledSaluta();
  throttledSaluta();
  throttledSaluta();