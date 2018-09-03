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
  
  const cardReverse = num.toString().split("").reverse().map(Number);

  const operationsHandler = cardReverse.map((element, index) => {
    const timesTwo = index % 2 !== 0 ? element * 2 : element;
    return timesTwo >= 10 && timesTwo <= 18 ? timesTwo - 9 : timesTwo;
  });

  const result = operationsHandler.reduce((acum, num) => acum + num);

  return result % 10 === 0 ? true : false;
};
