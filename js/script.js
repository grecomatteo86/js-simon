/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare
sono stati individuati. */

// 1.
var numeri = [1,2,3,4,5];
alert(numeri);


setTimeout(function () {

  for ( i = 1; i <= 5; i++) {

    prompt('inserisci');

  }

}, 3000);
