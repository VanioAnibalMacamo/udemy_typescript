import { ErrorBase } from "./base.error.js";

export class EmailAlreadyExistsError extends ErrorBase {
  constructor(message = "O e-mail ja esta em uso por outra conta!") {
    super(409, message);
  }
}