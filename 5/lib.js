//Функция для проверки на число
(function() {
    const MIN_RANDOM = 1;
    const MAX_RANDOM = 1000;
    const NUMBEROFATTEMPTS = 10;    
    const randomNumber = getRandomIntInclusive(MIN_RANDOM, MAX_RANDOM);

    window.matchCheckWithRandomNumber = function() {
        let userNumber = getUserNumber();
        function countingNumberOfAttempts() {
            for (let i = 0; i < NUMBEROFATTEMPTS && userNumber != 0; i++) {
                if (userNumber < randomNumber && userNumber != null) {
                    userNumber = prompt('Вы ввели число меньше загаданного, введите другое число');
                }
                if (userNumber > randomNumber && userNumber != null) {
                    userNumber = prompt('Вы ввели число больше загаданного, введите другое число');
                }
                if (isNumber(userNumber) == false && userNumber != null) {
                    userNumber = prompt('Вы ввели не число, введите пожалуйста еще раз');
                }
            }
        }
    
        countingNumberOfAttempts();
    
        if (userNumber == randomNumber) {
            alert('Поздравляем, вы угадали число!')
        } 
        if (userNumber != randomNumber && userNumber != 0 && userNumber != null) {
            let askUser = confirm('Вы проиграли, хотите начать заново?');
            if (askUser == true) {
                countingNumberOfAttempts();
            }
        }
    }
})();