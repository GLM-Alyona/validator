export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const validate1 = /^[a-z]+/i.test(this.name); // в начале строки 1 или более латинских букв
    const validate2 = /\d{4,}/.test(this.name); // не более трех цифр подряд
    const validate3 = /[a-z0-9-_]*/i.test(this.name); // только латинские буквы, цифры, -, _
    const validate4 = /[a-z]+$/i.test(this.name); // в конце строки 1 или более латинских букв

    return validate1 && !validate2 && validate3 && validate4;
  }
}
