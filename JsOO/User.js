export default class User {
  #name;
  #email;
  #birth;
  #role;
  #active;

  constructor(name, email, birth, role, active = true) {
    this.#name = name;
    this.#email = email;
    this.#birth = birth;
    this.#role = role || "student";
    this.#active = active;
  }

  // accessor getter, allows to read private properties of classes from outside
  get name() {
    return this.#name;
  }
  get email() {
    return this.#email;
  }
  get birth() {
    return this.#birth;
  }
  get role() {
    return this.#role;
  }
  get active() {
    return this.#active;
  }

  // acessor setter, allow to change private properties

  set name(newName) {
    if (newName === "") {
      throw new Error("Invalid Format");
    }
    const userTemporary = this.name;
    this.#name = newName;
    console.log(
      `The name of user "${userTemporary}" was changed to "${this.#name}"`
    );
  }

  showInfo() {
    return `Name: ${this.name} | Email: ${this.email} | Role: ${this.role} | Active: ${this.active}`;
  }
}
