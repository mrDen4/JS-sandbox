let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
sum = 0;
userNum = 0;

while (userNum != null) {
    userNum = prompt('Введите число для суммы, для завершения суммы нажмите отмену');
    if (isNumber(userNum)) {
        sum += +userNum;
    }
}
alert('Сумма = ' + sum);
