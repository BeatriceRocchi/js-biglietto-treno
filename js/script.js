const kmUser = parseFloat(
  prompt("Inserisci i chilometri che devi percorrere: ")
);
const ageUser = parseInt(prompt("Inserisci la tua età: "));

console.log("Km da percorrere: ", kmUser);
console.log("Età utente: ", ageUser);

const priceKm = 0.21;
const discountMinors = 0.2;
const discountOver = 0.4;

let price = kmUser * priceKm;
console.log("Prezzo intero: ", price);
let message = "non è stato applicato alcuno sconto";

if (ageUser <= 18) {
  price += -price * discountMinors;
  message = `
  è stato applicato uno sconto del ${discountMinors * 100}%
  `;
} else if (ageUser >= 65) {
  price += -price * discountOver;
  message = `
  è stato applicato uno sconto del ${discountOver * 100}%
  `;
}

price = price.toFixed(2);

document.getElementById("output").innerHTML = `
<p>
Gentile utente, <br>
il prezzo richiesto per il tuo biglietto è pari a 
<strong>${price} €</strong>. <br>
Sulla base dell'età che hai indicato, ${message}.
</p>
`;
