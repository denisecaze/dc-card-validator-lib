const mocha = require("mocha"); 
const chai = require("chai");
const library = require("../index"); 
const expect = chai.expect;

describe("cardValidator", () => {
  it("should return an error", () => {
    expect(library.cardValidator()).throw("Erro: vazio");
  });

});
