function User(name, email) {
  this.name = name;
  this.email = email;
  this.showInfo = function () {
    return `Name: ${this.name} | Email: ${this.email}`;
  };
}

/*  METHOD 01
const user01 = new User("Erik", "erik@gmail.com");
const user02 = new User("Ana", "ana@gmail.com");

console.log(user01.showInfo());
console.log(user02.showInfo()); */

/*  METHOD 02
function Admin(role) {
  User.call(this, "Erik", "erik@gmail.com");
  this.role = role || "student";
}

Admin.prototype = Object.create(User.prototype);
const user01 = new Admin("admin");

console.log(user01.showInfo());
console.log(user01.role); */

//  METHOD 03
const user = {
  init: function (name, email) {
    this.name = name;
    this.email = email;
  },
  showInfo: function () {
    return `Name: ${this.name} | Email: ${this.email}`;
  },
};

const user01 = Object.create(user);
console.log(user01);

user01.init("Erik", "erik@gmail.com");
console.log(user01);
console.log(user01.showInfo());
