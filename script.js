let maxGuess = 25;
let name = prompt("Welkom! Wat is je naam?");
console.log('Hey ' + name);

let number = parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..."));
let randNum = Math.floor(Math.random() * maxGuess);
console.log(randNum);

for (i=1; i<=1;i++){
  if(number===randNum){
    console.log('"Gefeliciteerd je hebt gewonnen". Het spel is nu af.');
    console.log('Dag ' + name + '. Tot de volgende keer.');
  }else if(number!==randNum){
    let number = parseInt(prompt("Dat is niet correct, nog een keer?"));
    let randNum = Math.floor(Math.random() * maxGuess);
    if(number===randNum){
      console.log('"Gefeliciteerd je hebt gewonnen". Het spel is nu af.');
      console.log('Dag ' + name + '. Tot de volgende keer.');
    }else{
      console.log('Helaas ' + name + '. Tot de volgende keer.');
    }
  }
};