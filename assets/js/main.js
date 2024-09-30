console.log("Hello world");

// Prima fase: preparazione 
// Creo la prima variabile dove salvare il numero di chilometri
let num_of_km;

// Creo la seconda variabile dove salvare l'età del passeggiero
let passenger_age;

// Creo la seconda variabile dove salvare il prezzo al km
let price_at_km = 0.21;

// Creo la variabile price dove salvare il prezzo del biglietto
let price;


// Seconda fase: raccogliere dati
// Utilizzo un prompt per salvare il numero di km
num_of_km = prompt("Ciao, inserisci il numero di chilometri");

// Utilizzo un prompt per salvare l'età del passeggero
passenger_age = prompt("Inserisci la tua età");

// stampo i due prompt
console.log(num_of_km, passenger_age);

// Terza fase: elaborazione codice
if (passenger_age < 18) {
    // verifico se sono minorenni
    price = (num_of_km * price_at_km) - (0.20 * (num_of_km * price_at_km));
} else if (passenger_age > 65) {
    // verifico se sono over 65
    price = (num_of_km * price_at_km) - (0.40 * (num_of_km * price_at_km));
} else {
    // altrimenti sono > 18 ma < 65
    price = num_of_km * price_at_km;
}


// Quarta fase: mostrare output
// stampo il messaggio in console
console.log(price);