let user = {
  fullName: '',
  firstName: '',
  lastName: '',
  registrationTime: '',
  requestUser() {
    this.fullName = prompt('Введите Имя и фамилию');
    this.firstName = this.fullName.split(' ')
  }
};
let userList = {
  users: []
};
user.requestUser();