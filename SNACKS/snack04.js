// Scrivi una funzione creaTimer che accetta un tempo (in ms) 
// e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {
    return function () {
      setTimeout(function () {
        console.log("Tempo scaduto!");
      }, tempo);
    };
  }

  const avviaTimer = creaTimer(2000);
  avviaTimer();