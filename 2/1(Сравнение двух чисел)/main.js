let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let firstNumber = prompt('Введите первое число, которое хотите сравнить');
while (isNumber(firstNumber) == false) {
    firstNumber = prompt('Неправильный ввод данных в первом значении, введите пожалуйста цифры');
}

let secondNumber = prompt('Введите второе число, которое хоиите сравнить');
while (isNumber(secondNumber) == false) {
    secondNumber = prompt('Неправильный ввод данных во втором значении, введите пожалуйста цифры');
}

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (firstNumber < secondNumber) {
    alert(firstNumber + ' < ' + secondNumber);
}

if (firstNumber == secondNumber) {
    alert(firstNumber + ' = ' + secondNumber);
}

if (firstNumber > secondNumber) {
    alert(firstNumber + ' > ' + secondNumber);
}