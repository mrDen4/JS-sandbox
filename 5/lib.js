const MIN_RANDOM = 1;
const MAX_RANDOM = 1000;
const NUMBEROFATTEMPTS = 10;
//Функция для проверки на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getUserNumber() {
    let userNumber = prompt('Введите число, чтобы угадать число от 1 до 1000!');
    while (isNumber(userNumber) == false && userNumber != null) {
        userNumber = prompt('Вы ввели не число, введите пожалуйста еще раз');
    }

    return userNumber;  
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function matchCheckWithRandomNumber() {
    const randomNumber = getRandomIntInclusive(MIN_RANDOM, MAX_RANDOM);
    let userNumber = getUserNumber();

    function checkRandomNumber() {
        for (let i = 0; i < NUMBEROFATTEMPTS; i++) {
            if (userNumber < randomNumber && userNumber != null) {
                userNumber = prompt('Вы ввели число меньше загаданного, введите другое число');
            }
            if (userNumber > randomNumber) {
                userNumber = prompt('Вы ввели число больше загаданного, введите другое число');
            }
            if (isNumber(userNumber) == false && userNumber != null) {
                userNumber = prompt('Вы ввели не число, введите пожалуйста еще раз');
            }    
        }
    }

    checkRandomNumber();
    
    if (userNumber != randomNumber) {
        let askUser = true;
        while (askUser == true) {
            askUser = confirm('Вы проиграли, хотите начать заново?');
            if (askUser == true) {
                checkRandomNumber();
            } 
        }
    }

    if (userNumber == randomNumber) {
        alert('Поздравляем, вы угадали число!')
    }
};