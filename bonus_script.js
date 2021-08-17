let name = prompt("Welkom! Wat is je naam?");
console.log('Hey ' + name);

let numMin = parseInt(prompt("Voer het kleinste nummer in..."));
let numMax = parseInt(prompt("Voer het grootste nummer in..."));
//let randNum = Math.floor(Math.random() * (numMax - numMin) + numMin);

for(i=0; i<5;i++){
  let number = parseInt(prompt("Raad het nummer..."));
  let randNum = Math.floor(Math.random() * (numMax - numMin) + numMin);
  console.log(randNum);

  if(number===randNum){
    console.log('"Gefeliciteerd je hebt gewonnen".');
    console.log('Dag ' + name + '. Tot de volgende keer.');
    break;
  } else if (number!==randNum && i<4){
    console.log('Dat is niet correct, nog een keer?');
  } else{
    console.log('Dag ' + name + '. Tot de volgende keer.');
  }

  if (i < 4) {
    console.log((4 - i) + ' Pogingen over');
    } else
    console.log('Helaas, geen pogingen meer. Het spel is nu af');
};