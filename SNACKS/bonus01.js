// Scrivi una funzione contoAllaRovescia che accetta un numero n 
// e stampa il conto alla rovescia da n a 0, 
// con un intervallo di 1 secondo tra ogni numero. 
// Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.


function contoAllaRovescia(n) {
    let contatore = n;

    const timer = setInterval(function () {
      console.log(contatore);

      if (contatore === 0) {
        console.log("Tempo scaduto!");
        clearInterval(timer);
      }

      contatore--;
    }, 1000);
  }

  contoAllaRovescia(5);