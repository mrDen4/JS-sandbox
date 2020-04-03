const START_RANDOM = 1;
const END_RANDOM = 1000;

//Функция для проверки на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getUserNumber() {
    let userNumber = prompt('Введите число, чтобы угадать число от 1 до 1000!');
    checkUserNumber(userNumber);
    console.log(userNumber);

    return userNumber;  
};

function checkUserNumber(userNumber) {
    while (isNumber(userNumber) == false && userNumber != null) {
        userNumber = prompt('Вы ввели не число, введите пожалуйста еще раз');
    }

    return userNumber;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function matchCheckWithRandomNumber() {
    const randomNumber = getRandomIntInclusive(START_RANDOM, END_RANDOM);
    let userNumber = getUserNumber();
    
    while (userNumber != randomNumber && userNumber != null) {
        if (userNumber < randomNumber && userNumber != null) {
            userNumber = prompt('Вы ввели число меньше загаданного, введите другое число');
        }
        if (userNumber > randomNumber) {
            userNumber = prompt('Вы ввели число больше загаданного, введите другое число');
        }
        checkUserNumber(userNumber);
    }
    if (userNumber == randomNumber) {
        alert('Поздравляем, вы угадали число!')
    }
};

matchCheckWithRandomNumber();