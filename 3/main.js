const START_RANDOM = 1;
END_RANDOM = 1000;
let randomNumber = getRandomIntInclusive(START_RANDOM, END_RANDOM);
//Функция для проверки на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
function getUserNumber(n) {
    let userNumber;
    while (isNumber(n) == false) {
        n = prompt('Вы ввели не число, введите пожалуйста еще раз');
        userNumber = n;

        if (n == null) {
            return n = null;
        }
    }
    return n;  
};
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function gameWithRandomNumbers() {
    let userNumber = prompt('Введите число, чтобы угадать число от 1 до 1000!');

    while (userNumber != randomNumber && userNumber != null) {
        userNumber = getUserNumber(userNumber);
        if (userNumber < randomNumber && userNumber != null) {
            userNumber = prompt('Вы ввели число меньше загаданного, введите другое число');
        }
        if (userNumber > randomNumber) {
            userNumber = prompt('Вы ввели число больше загаданного, введите другое число');
        }
    }
    if (userNumber == randomNumber) {
        alert('Поздравляем, вы угадали число!')
    }
};

gameWithRandomNumbers();