// Prima fase: preparazione 
// Creo la variabile dove salvare il numero di chilometri
let num_of_km;

// Creo la variabile dove salvare l'età del passeggiero
let passenger_age;

// Creo la variabile dove salvare il prezzo al km
let price_at_km = 0.21;

// Creo la variabile price dove salvare il prezzo del biglietto
let final_price;


// Seconda fase: raccogliere dati
// Utilizzo un prompt per salvare il numero di km
num_of_km = Number(prompt("Ciao, inserisci il numero di chilometri"));

// Utilizzo un prompt per salvare l'età del passeggero
passenger_age = Number(prompt("Inserisci la tua età"));

// stampo i due prompt
console.log(num_of_km, passenger_age);


// Terza fase: elaborazione codice
// Creo la variabile per calcolare il prezzo del biglietto base
let base_price = num_of_km * price_at_km;

// creo le condizioni di sconto
if (passenger_age < 18) { // verifico se sono minorenni
    final_price = base_price - (0.20 * base_price);

} else if (passenger_age > 65) { // verifico se sono over 65
    final_price = base_price - (0.40 * base_price);

} else { // altrimenti non sono soggetti a sconto
    final_price = base_price;
}


// Quarta fase: mostrare output
// stampo il messaggio in console
console.log(`${final_price.toFixed(2)} €`);