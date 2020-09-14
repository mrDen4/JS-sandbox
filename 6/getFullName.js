(function() {
    window.getFullName = function() {
        const MAX_WORDS_COUNT = 2;
        let fullName = '';
        while (true) {
          fullName = prompt('Введите Имя и фамилию');
          if (fullName == null) {
            usersList.getAllUsers();
            return false;
          }
          fullName = fullName.trim();
          fullName = fullName.split(' ');
          let firstName = fullName[0];
          let lastName = fullName[1];
          if (fullName.length != MAX_WORDS_COUNT) {
            alert('Неправильный ввод имени и фамилии');
          }
          if (fullName.length == MAX_WORDS_COUNT) {
            const newUser = new User(firstName,lastName);
            usersList.add(newUser);
          } 
        };
      }
})();