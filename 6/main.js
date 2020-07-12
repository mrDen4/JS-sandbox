const UsersList = new UserList();

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

function GetFullName() {
  let fullName = '';
  while (fullName != null) {
    fullName = prompt('Введите Имя и фамилию');
    if (fullName != null) {
      fullName = fullName.split(' ');
      firstName = fullName[0];
      lastName = fullName[1];
      let regTime = new Date();
      if (lastName != undefined && firstName != '' && fullName[2] == undefined) {
        newUser = new User(firstName,lastName,regTime);
        UsersList.add(newUser);
      } else {
        alert('Неправильный ввод имени и фамилии');
      }
    } else {
      UsersList.getAllUsers();
    }
  };
}

GetFullName();