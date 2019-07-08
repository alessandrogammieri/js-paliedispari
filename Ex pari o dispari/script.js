/* L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
e dichiariamo chi ha vinto.*/

// Definizione delle variabili
var scelta, number1, number2, somma;

// Chiediamo all'utente sceglie pari o dispari
scelta = prompt("Scegli pari o dispari");
console.log(scelta);

// Funzione per generare numeri random tra 1 e 5
function numberGenerator() {
  var number = Math.floor(Math.random() * 5) + 1;
  return number;
}

// Generiamo i due numeri
number1 = numberGenerator();
console.log(number1);
number2 = numberGenerator();
console.log(number2);

// Sommiamo i due numeri
somma = number1 + number2;
console.log(somma);

// Funzione pari - dispari
function pariDispari(somma) {
  if ((somma % 2) == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

// Verifichiamo il risultato
console.log(pariDispari(somma));
