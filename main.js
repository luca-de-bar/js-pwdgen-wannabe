import './style.css'

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * 999);
}

let name = prompt('Immetti il tuo nome');
let surname = prompt("Immetti il tuo cognome");
let color = prompt("Immetti il tuo colore preferito");
const numberOne = Number(prompt('Inserisci il primo numero'));
const numberTwo = Number(prompt("Inserisci il secondo numero"));
const division = numberOne / numberTwo;
const symbol = '!';
let password = name + surname + color + randomNumberGenerator() + symbol + division;


document.getElementById('passwordOutput').innerHTML= password;

console.log(password);
