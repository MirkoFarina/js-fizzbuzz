/* **Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */
console.log('--------------------- PRIMA SOLUZIONE -----------------------------------------------------');
//PRIMA SOLUZIONE (CON UNA COSTANTE IN MENO E USANDO L'OPERATORE LOGICO &&)********************************************************
// CONTATORE
for(let i = 1; i <= 100; i++ ){
  // DATA
  const fizz = 3;
  const buzz = 5;
  
  // LOGICA + stamp in console
  if ((!(i % fizz)) && (!(i % buzz))){
    console.log('--fizzBuzz', i);
  }else if (!(i % fizz)){
    console.log('---fizz', i);
  }else if (!(i % buzz)){
    console.log('--buzz', i);
  }else {
    console.log(i);
  }
}

console.log('--------------------- SECONDA SOLUZIONE -----------------------------------------------------');
//SECONDA SOLUZIONE (UTILIZZANDO LA VARIABILE "COSTANTE" FIZZBUZZ CHE è IL PRODOTTO DELLA MOLTIPLICAZIONE COSI' DA OTTENERE UN NUMERO DIVISIBILE PER ENTRAMBI********************************************************
// CONTATORE
for(let i = 1; i <= 100; i++ ){
  // DATA
  const fizz = 3;
  const buzz = 5;
  const fizzBuzz = fizz * buzz;

  // LOGICA + stamp in console
  if (!(i % fizzBuzz)){
    console.log('--fizzBuzz', i);
  }else if (!(i % fizz)){
    console.log('---fizz', i);
  }else if (!(i % buzz)){
    console.log('--buzz', i);
  }else {
    console.log(i);
  }
}