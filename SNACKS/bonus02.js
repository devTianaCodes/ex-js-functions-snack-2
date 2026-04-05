// Scrivi una funzione sequenzaOperazioni che accetta
//  un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza 
// con un ritardo uguale al tempo di intervallo.


function sequenzaOperazioni(operazioni, intervallo) {
    for (let i = 0; i < operazioni.length; i++) {
      setTimeout(function () {
        operazioni[i]();
      }, intervallo * i);
    }
  }

 
  const operazioni = [
    function () {
      console.log("Operazione 1");
    },
    function () {
      console.log("Operazione 2");
    },
    function () {
      console.log("Operazione 3");
    }
  ];

  sequenzaOperazioni(operazioni, 4000);