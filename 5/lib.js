//Функция для проверки на число
(function() {
    const MIN_RANDOM = 1;
    const MAX_RANDOM = 1000;
    const NUMBEROFATTEMPTS = 10;    
    let randomNumber = getRandomIntInclusive(MIN_RANDOM, MAX_RANDOM);

    window.matchCheckWithRandomNumber = function() {
        let askUser = true;
        let userNumber = getUserNumber();
        function countingNumberOfAttempts() {
            for (let i = 0; i < NUMBEROFATTEMPTS && userNumber != null; i++) {
                if (userNumber < randomNumber && userNumber != null) {
                    alert('Вы ввели число меньше загаданного, введите другое число')
                    userNumber = getUserNumber();
                }
                if (userNumber > randomNumber && userNumber != null) {
                    alert('Вы ввели число больше загаданного, введите другое число')
                    userNumber = getUserNumber();
                }
            }
        }
    
        countingNumberOfAttempts();

        while (userNumber != randomNumber && userNumber != null && askUser == true) {
            askUser = confirm('Вы проиграли, хотите начать заново?');
            if (askUser == true) {
                randomNumber = getRandomIntInclusive(MIN_RANDOM, MAX_RANDOM);
                countingNumberOfAttempts();
            }
        }

        if (userNumber == randomNumber) {
            alert('Поздравляем, вы угадали число!');
        } 
    }
})();