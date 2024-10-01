// Prima fase: preparazione 
// Creo la variabile dove salvare il numero di chilometri
let num_of_km;

// Creo la variabile dove salvare l'età del passeggiero
let passenger_age;

// Creo la variabile dove salvare il prezzo al km
let price_at_km;

// Creo la variabile price dove salvare il prezzo del biglietto
let final_price;

// creo la variabile per salvare il messaggio di output
let message;

// Seconda fase: raccogliere dati
// Utilizzo un prompt per salvare il numero di km
num_of_km = Number(prompt("Quanti chilometri vuoi percorrere? es: 10"));

// Utilizzo un prompt per salvare l'età del passeggero
passenger_age = Number(prompt("Qual è l'età del passeggero?"));

// stampo i due prompt
console.log(num_of_km, passenger_age);

// dichiaro la variabile price_at_km
price_at_km = 0.21;


// Terza fase: elaborazione codice
// Creo la variabile per calcolare il prezzo del biglietto base
let base_price = num_of_km * price_at_km;

// creo le condizioni di sconto
if (passenger_age < 18) { // verifico se sono minorenni
    // applico uno sconto del 20%
    final_price = base_price - (0.20 * base_price);
    message = (`Il prezzo finale del biglietto è: ${final_price.toFixed(2)} € - Discount 20%`);
    
} else if (passenger_age > 65) { // verifico se sono over 65
    // applico uno sconto del 40%
    final_price = base_price - (0.40 * base_price);
    message = (`Il prezzo finale del biglietto è: ${final_price.toFixed(2)} € - Discount 40%`);

} else { // altrimenti non sono soggetti a sconto
    // non applico sconto
    final_price = base_price;
    message = (`Il prezzo finale del biglietto è: ${final_price.toFixed(2)} € - Normale price`);
}


// Quarta fase: mostrare output
// stampo il messaggio in console
console.log(message);
