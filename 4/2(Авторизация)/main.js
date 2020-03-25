let users = [
  {
    login: 'dennis',
    password: 123,
    name: 'Денис'
  },
  {
    login: 'alex',
    password: 456,
    name: 'Алекс'
  },
  {
    login: 'petya',
    password: 789,
    name: 'Петр'
  }
];
function authorization() {
  let login = prompt ('Введите логин');
  let password = prompt ('Введите пароль');

  while (login != null && password != null) {
    let user = users.find(item => item.login == login);
    let pass = users.find(item => item.password == password);
    if (user == undefined || pass == undefined) {
      alert('Неправильный логин или пароль');
      login = prompt ('Введите логин');
      password = prompt ('Введите пароль');
    }
    if (user != undefined && pass != undefined) {
      alert('Привет ' + user.name);
      login = null;
    }
    console.log(login);
  };

}

authorization();