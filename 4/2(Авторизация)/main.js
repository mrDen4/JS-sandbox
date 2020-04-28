const users = [
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
const login = prompt ('Введите логин');
const password = prompt ('Введите пароль');

function authorization(login,password,users) {
  const user = users.find(item => item.login == login);

  if (user == undefined && login != null && password != null || user.password != password) {
      alert('Неправильный логин или пароль');
  } else {
    alert('Привет ' + user.name);
  };
}

authorization(login,password,users);