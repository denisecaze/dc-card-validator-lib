# Credit Card Validator 
A library designed to validate credit cards using Luhn's algorithm.

## Installation
+ Requires Node.js, NPM and Lodash. If you do not have it, go to:
	1. [Node + NPM](https://nodejs.org/en/download/);
	2. [Lodash](https://lodash.com/);
+ In the terminal, go to the folder where you want to use the library and then type:
```
$ npm install dc-card-validator-lib
```

## Use
```
$ node
> const library = require("dc-card-validator-lib")
> library.cardValidator(5234210238826905) 
> //true
```

## Technology Stack
+ HTML5
+ CSS3
+ JavaScript 
+ NPM
+ Mocha
+ Chai
+ NYC
+ Lodash

## Oficial Roadmap

#### versão 3.0.0 (scheduled for January 2019)
+ Implementation of more comprehensive validation, including verifier code and validity.

#### version 2.0.0 (scheduled for November 2018)
+ Identification of the main flags (Visa, MasterCard, Diners, Elo and Hipercard), which have different configurations, between 13 and 16 digits.

#### version 1.0.0 (released)
+ Verifies IF a credit card is valid or not, returning **true** or **false**.

