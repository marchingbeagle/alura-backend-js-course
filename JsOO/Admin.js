import User from "./User.js";

class Admin extends User {
  constructor(name, email, birth, role = "admin", active = true) {
    super(name, email, birth, role, active); // brings the values from User
  }
  createCourse(courseName) {
    return `${courseName} course created by ${this.name}`;
  }
}

const admin01 = new Admin("Erik adm do grupo", "erik@gmail.com", "2021-01-01");
console.log(admin01);
console.log(admin01.showInfo());
console.log(admin01.createCourse("Software Engineer"));
