const kmUser = parseInt(prompt("Inserisci i chilometri che devi percorrere: "));
const ageUser = parseInt(prompt("Inserisci la tua età: "));
const priceKm = 0.21;
const discountMinors = 0.2;
const discountOver = 0.4;

let price = kmUser * priceKm;

if (ageUser <= 18) {
  price += -price * discountMinors;
} else if (ageUser >= 65) {
  price += -price * discountOver;
}

price = price.toFixed(2);

document.getElementById("output").innerHTML = `
<p>
Gentile utente, <br>
il prezzo richiesto per il tuo biglietto è pari a ${price} €
</p>
`;
