import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const user01 = new User("Erik", "erik@gmail.com", "2021-01-01");
const admin01 = new Admin("Erik ADM", "erikadm@gmail.com", "2021-01-01");
const teacher01 = new Teacher("Giovani", "giovani@gmail.com", "2021-01-01");

user01.name = "Erik Schneider";
console.log(user01.showInfo());

console.log(admin01.showInfo());

console.log(teacher01.approveStudent("Erik"));
