import { validate } from "gerador-validador-cpf";

export default class User {
  cpf: string;
  zipcode: string;

  constructor(cpf: string, zipcode: string) {
    if (!validate(cpf)) throw new Error("Invalid CPF");
    this.cpf = cpf;
    this.zipcode = zipcode;
  }
}
