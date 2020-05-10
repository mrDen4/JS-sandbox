let user = {
  fullName: '',
  firstName: '',
  lastName: '',
  registrationTime: '',
  requestUser() {
    while (this.fullName != null) {
      this.fullName = prompt('Введите Имя и фамилию');
      if (this.fullName != null) {
        this.fullName = this.fullName.split(' ');
        this.firstName = this.fullName[0];
        this.lastName = this.fullName[1];
        this.registrationTime = new Date();
        userList.users.push(this.firstName, this.lastName, this.registrationTime)
      }
    }
  }
};
let userList = {
  users: [],
  getAllUsers() {
    console.log(this.users);
  }
};
user.requestUser();
userList.getAllUsers();