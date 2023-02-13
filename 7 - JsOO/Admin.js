import User from "./User.js";

export default class Admin extends User {
  constructor(name, email, birth, role = "admin", active = true) {
    super(name, email, birth, role, active); // brings the values from User
  }
  createCourse(courseName) {
    return `${courseName} course created by ${this.name}`;
  }
}
