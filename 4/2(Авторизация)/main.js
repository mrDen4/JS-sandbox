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

function askLoginPassword() {
  let login = prompt ('Введите логин');
  let password = prompt ('Введите пароль');
  let user = users.find(item => item.login == login);

  return {user: user, login: login, password: password};
}

function authorization() {
  let loginPassword = askLoginPassword();
  user = loginPassword.user; //Объект с данными пользователя
  promptLogin = loginPassword.login; // Логин, который ввел пользователь в prompt
  promptPassword = loginPassword.password; // Пароль, который ввел пользователь в prompt

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

authorization();