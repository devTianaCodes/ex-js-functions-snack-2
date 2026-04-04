// Definisci una funzione creaContatoreAutomatico 
// che accetta un intervallo di tempo 
// e restituisce una funzione che avvia un setInterval, 
// incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
    let contatore = 0;

    return function () {
      setInterval(function () {
        contatore++;
        console.log(contatore);
      }, intervallo);
    };
  }

  const avviaContatore = creaContatoreAutomatico(1000);
  avviaContatore();