// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var PariDispari;
var NumeroScelto = 0;
var NumeroRandom = Math.floor(Math.random() * 5 + 1);
var somma = 0;
console.log(NumeroRandom);
document.getElementById('pari').addEventListener('click',
function() {
  PariDispari = 'pari';
  document.getElementById('container').classList.remove('hidden');
  document.getElementById('pari').classList.add('hover');
});
document.getElementById('dispari').addEventListener('click',
function() {
  PariDispari = 'dispari';
  document.getElementById('container').classList.remove('hidden');
  document.getElementById('dispari').classList.add('hover');
});

// Numeri
document.getElementById('uno').addEventListener('click',
function() {
  NumeroScelto = 1;
  somma = SommaNumeri(NumeroScelto + NumeroRandom);
  console.log(somma);
  if (somma % 2 == 0 && PariDispari == 'pari') {
    console.log('hai vinto, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'pari') {
    console.log('hai perso, il risultato della somma é un numero dispari');
  } else if (somma % 2 == 0 && PariDispari == 'dispari') {
    console.log('hai perso, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'dispari'){
    console.log('hai vinto, il risultato della somma é un numero dispari');
  }
  document.getElementById('uno').classList.add('hover');

});
document.getElementById('due').addEventListener('click',
function() {
  NumeroScelto = 2;
  somma = SommaNumeri(NumeroScelto + NumeroRandom);
  console.log(somma);
  if (somma % 2 == 0 && PariDispari == 'pari') {
    console.log('hai vinto, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'pari') {
    console.log('hai perso, il risultato della somma é un numero dispari');
  } else if (somma % 2 == 0 && PariDispari == 'dispari') {
    console.log('hai perso, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'dispari'){
    console.log('hai vinto, il risultato della somma é un numero dispari');
  }
  document.getElementById('due').classList.add('hover');

});
document.getElementById('tre').addEventListener('click',
function() {
  NumeroScelto = 3;
  somma = SommaNumeri(NumeroScelto + NumeroRandom);
  console.log(somma);
  if (somma % 2 == 0 && PariDispari == 'pari') {
    console.log('hai vinto, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'pari') {
    console.log('hai perso, il risultato della somma é un numero dispari');
  } else if (somma % 2 == 0 && PariDispari == 'dispari') {
    console.log('hai perso, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'dispari'){
    console.log('hai vinto, il risultato della somma é un numero dispari');
  }
  document.getElementById('tre').classList.add('hover');

});
document.getElementById('quattro').addEventListener('click',
function() {
  NumeroScelto = 4;
  somma = SommaNumeri(NumeroScelto + NumeroRandom);
  console.log(somma);
  if (somma % 2 == 0 && PariDispari == 'pari') {
    console.log('hai vinto, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'pari') {
    console.log('hai perso, il risultato della somma é un numero dispari');
  } else if (somma % 2 == 0 && PariDispari == 'dispari') {
    console.log('hai perso, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'dispari'){
    console.log('hai vinto, il risultato della somma é un numero dispari');
  }
  document.getElementById('quattro').classList.add('hover');

});
document.getElementById('cinque').addEventListener('click',
function() {
  NumeroScelto = 5;
  var somma = SommaNumeri(NumeroScelto + NumeroRandom);
  console.log(somma);
  if (somma % 2 == 0 && PariDispari == 'pari') {
    console.log('hai vinto, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'pari') {
    console.log('hai perso, il risultato della somma é un numero dispari');
  } else if (somma % 2 == 0 && PariDispari == 'dispari') {
    console.log('hai perso, il risultato della somma é un numero pari');
  } else if (somma % 2 == 1 && PariDispari == 'dispari'){
    console.log('hai vinto, il risultato della somma é un numero dispari');
  }
  document.getElementById('cinque').classList.add('hover');

});

function SommaNumeri(num1, num2) {
 var risultato = NumeroScelto + NumeroRandom;
 return risultato;
}




// var somma = SommaNumeri(NumeroScelto + NumeroRandom);
// console.log(somma);
