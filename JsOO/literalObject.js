const user = {
  name: "Erik",
  email: "erik@gmail.com",
  birth: "2021/01/01",
  role: "admin",
  ativo: true,
  showInfo: function () {
    console.log("Nome:" + this.name + ", email:" + this.email);
  },
};

const showUser = function () {
  console.log("Nome:" + this.name + ", email:" + this.email);
};
const showEmail = showUser.bind(user);

showEmail();
