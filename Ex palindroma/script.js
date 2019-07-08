/* Una funzione per capire se la parola è palindroma */

// Definizione delle variabili
var palindromo, risultato;

// Chiediamo all'utente di inserire una parola
palindromo = prompt("Inserisci qui la tua parola o frase");
console.log(palindromo);

// Verifichiamo se la parola è un palindromo
function checkPalindromo(palindromo) {
  // La frase o parola diventa minuscola e si rimuovono gli spazi
  palindromo = palindromo.toLowerCase().replace(/\s/g,"");
  console.log("tutto minuscolo ed eliminiamo gli spazi " + palindromo);

  // Con slip diventa un array di sottostringhe, ribalto e creo una nuova stringa
  palindromoReverse = palindromo.split("").reverse().toString();
  console.log("facciamo un array di sottostringhe, invertiamo l'ordine degli elementi e convertiamo tutto in una stringa " + palindromo);

  for (var i = 0; i < ((palindromoReverse.length)-1); i++) {
    console.log("Ciclo " + palindromoReverse);
    palindromoReverse = palindromoReverse.replace(",","");
    console.log(palindromoReverse);
  }
  if (palindromo == palindromoReverse) {
    // return "è un palindromo";
    risultato = "è un palindromo";
  } else {
    // return "non è un palindromo";
    risultato = "non è un palindromo";
  }
  document.getElementById('mio_id').innerHTML = "La tua parola o frase " + risultato;
}

checkPalindromo(palindromo);
// console.log("Questo " + checkPalindromo(palindromo));
