const _ = require("lodash");

exports.cardValidator = num => {
  let cardReverse = num.split("").reverse().join("");
  let timesArray = [];
  let sumArray = [];

  if (num === "" || num.match(/[a-zA-Z]/)) {
    alert("Você precisa digitar um número.");
  } 

  for (let i = 0; i < cardReverse.length; i++) { 
    i % 2 !== 0 ? timesArray.push(parseInt(cardReverse[i] * 2)) : timesArray.push(parseInt(cardReverse[i]));
  }

  for (let digit of timesArray) {
    digit >= 10 && digit <= 18 ? sumArray.push(digit - 9) : sumArray.push(digit);
  }
  
  let result = sumArray.reduce((a, b) => a + b);

  return result % 10 === 0 ? true : false;
}

cardValidator("5234210238826905");