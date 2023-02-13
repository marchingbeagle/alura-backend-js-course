export default class User {
  constructor(name, email, birth, role, active = true) {
    this.name = name;
    this.email = email;
    this.birth = birth;
    this.role = role || "student";
    this.active = active;
  }

  showInfo() {
    return `Name: ${this.name} | Email: ${this.email} | Role: ${this.role} | Active: ${this.active}`;
  }
}

// const user01 = new User("Erik", "erik@gmail.com", "2004-07-30");
// console.log(user01);
// console.log(user01.showInfo());
