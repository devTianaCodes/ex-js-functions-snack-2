// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(messaggio) {
    setInterval(function () {
      console.log(messaggio);
    }, 1000);
  }

  stampaOgniSecondo("Ciao!");