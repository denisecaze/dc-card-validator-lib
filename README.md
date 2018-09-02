# Credit Card Validator 
Biblioteca destinada a validar números de cartões de crédito através do algoritmo de Luhn

## Instalação
+ Requer Node.js, NPM e Lodash. Caso não possua, acesse: 
	1. [Node + NPM](https://nodejs.org/en/download/);
	2. [Lodash](https://lodash.com/);
+ Utilize o terminal e insira, de preferência na pasta onde quer utilizar a biblioteca:
```
$ npm install dc-card-validator-lib
```

## Uso
```
$ node
> const library = require("dc-card-validator-lib")
> library.cardValidator(5234210238826905) 
> //true
```

## Roadmap oficial

#### versão 3.0.0 (prevista para dezembro/2018)
+ Implementação de validação mais abrangente, incluindo o código verificador e a validade
+ Transcrição do README para inglês e espanhol

#### versão 2.0.0 (prevista para novembro/2018)
+ Implementação de identificações das principais bandeiras (Visa, MasterCard, Diners, Elo e Hipercard), que possuem configurações diversas, entre 13 e 16 dígitos

#### versão 1.0.0 (released)
+ Verifica se um número de cartão de crédito é válido ou não, retornando *true* ou *false*

