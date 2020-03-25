let users = [
  {
    login: 'dennis',
    password: 123,
    name: 'Денис'
  },
  {
    login: 'alex',
    password: 123,
    name: 'Алекс'
  },
  {
    login: 'petya',
    password: 123,
    name: 'Петр'
  }
];
function authorization() {
  let login = prompt ('Введите логин');
  let password = prompt ('Введите пароль');

  while (login != null || password != null) {
    login = users.find(item => item.login == login);
    password = users.find(item => item.password == password);
    if (user == undefined || pass == undefined) {
      alert('Неправильный логин или пароль');
    }
    if (user != undefined && pass != undefined) {
      alert('Привет ' + user.name);
    }
    alert(user == undefined);
  };

}

authorization();