//PRIMA SOLUZIONE (CON UNA COSTANTE IN MENO E USANDO L'OPERATORE LOGICO &&)********************************************************
//GENERAL DATA
const container = document.querySelector('.container');

// CONTATORE
for(let i = 1; i <= 100; i++ ){
  // DATA
  const fizz = 3;
  const buzz = 5;
  const box = document.createElement("div");
  let stampInBox;
  // LOGICA 
  box.classList.add('box');
 
  if ((!(i % fizz)) && (!(i % buzz))){
    box.classList.add('bg-orange');
    stampInBox = 'FizzBuzz';
  }else if (!(i % fizz)){
    box.classList.add('bg-green')
    stampInBox = 'Fizz';
  }else if (!(i % buzz)){
    box.classList.add('bg-lightblue')
    stampInBox = 'Buzz'
  }else {
    box.classList.add('bg-lightyellow')
    stampInBox = i;
  }

 
  // OUTPUT
  container.append(box);
  box.innerHTML = stampInBox;
}


// SOLO STAMP IN CONSOLE
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