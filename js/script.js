/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare
sono stati individuati. */

/* 1. Creo una funzione randomizzatore,
che mi genera dei numeri random dato un range. */
function randomizzatore(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}

/* 2. Creo due array vuoti:
arrayCpu, in cui andrò a pushare i numeri generati dal mio ranzomizzatore;
arrayUtente, in cui inserirò i numeri scelti dall'utente. */
var arrayCpu = [];
var arrayUtente = [];

/* 3. Invoco la mia funzione randomizzatore
per creare 5 numeri random da 1 a 100. */
for (var i = 0; i < 5; i++) {
 arrayCpu.push(randomizzatore(1,100));
}

/* 4. Stampo un alert che dice all'utente
quali numeri deve memorizzare per i prossimi 30 secondi. */
alert('Memorizza questi numeri: ' + arrayCpu);
alert('Hai 30 secondi da adesso');

/* 5. Imposto la timing function che mi attiva la funzione
dopo un tempo certo e che fa partire il timer.
Con un ciclo for vado a chiedere all'utente,
dopo che trascorrono i 30 secondi, di inserire, uno alla volta, i numeri,
che poi pusho nell'arrayUtente. */

setTimeout(function () {

  for ( var i = 1; i <= arrayCpu.length; i++) {

    var numeriUtente = parseInt(prompt('inserisci i numeri'));

    arrayUtente.push(numeriUtente);

  }

  /* 6. Stampo un messaggio che ricorda all'utente i numeri che ha inserito. */
  alert('I numeri che hai inserito sono: ' + arrayUtente);

  /* 7. Con un ciclo for eseguo il controllo:
  se nei suoi numeri inseriti l'utente indovina uno o più numeri presenti nell'arrayCpu
  allora vengono pushati in un nuovo array numeriIndovinati. */
  var numeriIndovinati = [];

  for ( var i = 0; i <= arrayUtente.length; i++) {

    if (arrayCpu.includes(arrayUtente[i])) {

      numeriIndovinati.push(arrayUtente[i]);

    }

  }

  // 8. Stampo i messaggi
  if (numeriIndovinati == 0) {

    alert('Non hai indovinato nessun numero');

  } else {

    alert('I numeri che hai indovinato sono: ' + numeriIndovinati);

  }


  alert('Punti totalizzati: ' + numeriIndovinati.length);


}, 30000);
