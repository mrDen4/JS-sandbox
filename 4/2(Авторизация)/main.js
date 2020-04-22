let users = [
  {
    login: 'dennis',
    password: '123',
    name: 'Денис'
  },
  {
    login: 'alex',
    password: '456',
    name: 'Алекс'
  },
  {
    login: 'petya',
    password: '789',
    name: 'Петр'
  }
];
let login = prompt ('Введите логин');
let password = prompt ('Введите пароль');

function authorization(login,password,users) {
  let user = users.find(item => item.login == login);

  if (user == undefined && login != null && password != null || user.password != password) {
      alert('Неправильный логин или пароль');
  };

  if (user.password == password) {
    alert('Привет ' + user.name);
  }
}

authorization(login,password,users);