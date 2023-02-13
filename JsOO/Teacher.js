import User from "./User.js";

class Teacher extends User {
  constructor(name, email, birth, role = "teacher", active = true) {
    super(name, email, birth, role, active);
  }
  approveStudent(student) {
    return `Student ${student} approved by teacher ${this.name}`;
  }
}

const teacherGiovani = new Teacher(
  "Giovani",
  "giovani@gmail.com",
  "2021-01-01"
);

console.log(teacherGiovani.showInfo());
console.log(teacherGiovani.approveStudent("Erik"));
