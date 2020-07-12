let fullName = '';
let UsersList = new UserList();
let newUser = new User();

function User(firstName,lastName,regTime) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regTime = regTime;
}

function UserList() {
  this.users = [];
  this.add = function(user) {
    this.users.push(user);
  };
  this.getAllUsers = function() {
    console.log(this.users);
  };
}

while (fullName != null) {
  fullName = prompt('Введите Имя и фамилию');
  if (fullName != null) {
    fullName = fullName.split(' ');
    firstName = fullName[0];
    lastName = fullName[1];
    let regTime = new Date();
    newUser = new User(firstName,lastName,regTime);
    // UsersList = new UserList(newUser);
    UsersList.add(newUser);
  } else {
    UsersList.getAllUsers();
  }
};