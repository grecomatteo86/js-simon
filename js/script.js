/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare
sono stati individuati. */


/* 1. Creo l'array generato dalla cpu
e un array vuoto in cui inserirò i numeri scelti dall'utente */
var arrayCpu = [1,2,3,4,5];
var arrayUtente = [];

// 2. Stampo un alert che dice all'utente di memorizzare 5 numeri
alert('memorizza i seguenti numeri ' + arrayCpu);



/* 3. Imposto la timing function che mi attiva la funzione
dopo un tempo certo e che fa partire il timer.
Con un ciclo for vado a chiedere all'utente,
dopo che trascorrono i secondi, di inserire, uno alla volta, i numeri. */

setTimeout(function () {

  for ( var i = 1; i <= 5; i++) {

    var numeriUtente = parseInt(prompt('inserisci i numeri'));

    arrayUtente.push(numeriUtente);

  }

  alert('I numeri che hai inserito sono: ' + arrayUtente);

  /* 4. Con un ciclo for eseguo il controllo:
  se nei suoi numeri inseriti l'utente indovina uno o più numeri presenti nell'arrayCpu
  allora vengono pushati in un nuovo array numeriIndovinati. */
  var numeriIndovinati = [];

  for ( var i = 0; i <= arrayUtente.length; i++) {

    if (arrayCpu.includes(arrayUtente[i])) {

      numeriIndovinati.push(arrayUtente[i]);

    }

  }

  // 5. Stampo i messaggi
  alert('I numeri che hai indovinato sono: ' + numeriIndovinati);

  alert('Punti totalizzati: ' + numeriIndovinati.length);


}, 3000);
