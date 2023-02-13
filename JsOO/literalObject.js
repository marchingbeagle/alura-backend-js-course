const user = {
  name: "Pedro",
  email: "pedro@gmail.com",
  birth: "2021/01/01",
  role: "student",
  ativo: true,
  showInfo: function () {
    console.log(
      `Name: ${this.name} | Email: ${this.email} | Role: ${this.role}`
    );
  },
};

const admin = {
  name: "Erik",
  email: "erik@gmail.com",
  birth: "2021/01/01",
  role: "admin",
  createCourse() {
    console.log("Course created");
  },
};

//quem herda // de quem herda
Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.showInfo();
user.showInfo();

try {
  user.createCourse();
} catch (error) {
  console.log("Sem permissao");
}

/*
user.showInfo();
const show = function () {
  console.log(this.name);
};
show();

const showName = show.bind(user);
showName(); */
