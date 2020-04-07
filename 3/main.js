const MIN_RANDOM = 1;
const MAX_RANDOM = 1000;

//Функция для проверки на число
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getUserNumber() {
    let userNumber = prompt('Введите число, чтобы угадать число от 1 до 1000!');
<<<<<<< HEAD
    userNumber = checkUserNumber(userNumber);
    console.log(userNumber);

    return userNumber;  
};

function checkUserNumber(userNumber) {
=======
>>>>>>> e35afc9c3c74b1553bc04bf0c554be8fcd9ceb97
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

function matchCheckWithRandomNumber() {
    const randomNumber = getRandomIntInclusive(MIN_RANDOM, MAX_RANDOM);
    let userNumber = getUserNumber();
    
    while (userNumber != randomNumber && userNumber != null) {
        if (userNumber < randomNumber && userNumber != null) {
            userNumber = prompt('Вы ввели число меньше загаданного, введите другое число');
        }
        if (userNumber > randomNumber) {
            userNumber = prompt('Вы ввели число больше загаданного, введите другое число');
        }
<<<<<<< HEAD
        userNumber = checkUserNumber(userNumber);
=======
        while (isNumber(userNumber) == false && userNumber != null) {
            userNumber = prompt('Вы ввели не число, введите пожалуйста еще раз');
        }    
>>>>>>> e35afc9c3c74b1553bc04bf0c554be8fcd9ceb97
    }
    if (userNumber == randomNumber) {
        alert('Поздравляем, вы угадали число!')
    }
};

matchCheckWithRandomNumber();