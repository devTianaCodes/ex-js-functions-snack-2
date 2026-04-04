// Scrivi una funzione eseguiEferma che accetta un messaggio, 
// un tempo di avvio e un tempo di stop. 
// Il messaggio deve essere stampato a intervalli regolari, 
// ma si deve fermare dopo il tempo di stop.


function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const intervallo = setInterval(function () {
      console.log(messaggio);
    }, tempoAvvio);

    setTimeout(function () {
      clearInterval(intervallo);
    }, tempoStop);
  }

  eseguiEferma("Ciao!", 1000, 5000);