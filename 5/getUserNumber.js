(function() {
    window.getUserNumber = function() {
        let userNumber = prompt('Введите число, чтобы угадать число от 1 до 1000!');
        while (isNumber(userNumber) == false && userNumber != null) {
            userNumber = prompt('Вы ввели не число, введите пожалуйста еще раз');
        }
        if (userNumber == null) {
            return userNumber;
        }
        return +userNumber;
    }
})();