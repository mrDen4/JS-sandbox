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
  promptLogin = user.login; // Логин, который ввел пользователь в prompt
  promptPassword = user.password; // Пароль, который ввел пользователь в prompt

  while (user == undefined && promptLogin != null && promptPassword != null) {
      alert('Неправильный логин или пароль');
      user = askLoginPassword().user;
  };

  while (user.password != promptPassword && promptLogin != null && promptPassword != null) {
    alert('Неправильный логин или пароль');
    promptPassword = askLoginPassword().password;
  }

  if (user.password == promptPassword) {
    alert('Привет ' + user.name);
  }
}

authorization(login,password,users);