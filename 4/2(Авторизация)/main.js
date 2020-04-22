const USERS = [
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
const LOGIN = prompt ('Введите логин');
const PASSWORD = prompt ('Введите пароль');

function authorization(login,password,users) {
  const USER = users.find(item => item.login == login);

  if (USER == undefined && login != null && password != null || USER.password != password) {
      alert('Неправильный логин или пароль');
  };

  if (USER.password == password) {
    alert('Привет ' + USER.name);
  }
}

authorization(LOGIN,PASSWORD,USERS);