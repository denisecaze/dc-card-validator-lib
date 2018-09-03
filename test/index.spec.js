const chai = require("chai");
const library = require("../index"); 
const expect = chai.expect;

describe("cardValidator", () => {
  describe("when there is no parameter", () => {
    it("should return an error", () => {
      let nullParameter = () => { library.cardValidator(); };
      expect(nullParameter).throw("Erro: parâmetro vazio.");
    });
  });

  describe("when the parameter is a string", () => {
    it("should return an error", () => {
      let stringParameter = () => { library.cardValidator("oi"); };
      expect(stringParameter).throw("Erro: precisa digitar números.");
    });
  });  

  describe("when the parameter is a number but it only has one digit", () => {
    it("should return an error", () => {
      let invalidNumberParameter = () => { library.cardValidator(1); };
      expect(invalidNumberParameter).throw("Erro: precisa digitar um número válido.");
    });
  });  

  describe("when the parameter is a number and a valid credit card number", () => {
    it("should return true", () => {
      expect(library.cardValidator(36490102462661)).equal(true);
    });
  });

  describe("when the parameter is a number and a valid credit card number", () => {
    it("should return true", () => {
      expect(library.cardValidator(38520000023237)).equal(true);
    });
  });

  describe("when the parameter is a number and a valid credit card number", () => {
    it("should return true", () => {
      expect(library.cardValidator(4222222222222)).equal(true);
    });
  });

  describe("when the parameter is a number and an invalid credit card number", () => {
    it("should return false", () => {
      expect(library.cardValidator(5234210238823905)).equal(false);
    });
  }); 
});
