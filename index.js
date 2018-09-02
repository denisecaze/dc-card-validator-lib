exports.cardValidator = num => {
  if (num == null) {
    throw new Error("Erro: parâmetro vazio.");
  } 

  if (typeof num !== "number") {
    throw new Error("Erro: precisa digitar números.");
  }

  if (num.toString().length === 1) {
    throw new Error("Erro: precisa digitar um número válido.");  
  }
  
  let cardReverse = num.toString().split("").reverse().map(Number);

  cardReverse.map((element, index) => {
    index % 2 !== 0 ? element * 2 : element;
    element >= 10 && element <= 18 ? element - 9 : element;
  });

  let result = cardReverse.reduce((acum, num) => acum + num);

  return result % 10 === 0 ? true : false;
};
