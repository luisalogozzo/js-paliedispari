// Scrivi una funzione per capire se la parola è palindroma

var parola = prompt('inserisci una parola');

var parolaAlContrario = parola.split("");
var reverse = parolaAlContrario.reverse();

var parolaInserita = parola.split("");

var trovato = false;

for (var i = 0; i < parolaInserita.length; i++) {
  if (parolaInserita[i] == reverse[i]) {
    trovato = true;
  } else {
    trovato = false;
  }
}

if (trovato == true) {
 console.log('palindrome');
} else {
 console.log('not a palindrome');
}
