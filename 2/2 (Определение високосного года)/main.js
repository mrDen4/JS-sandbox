let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
startYear = prompt('Введите начальный год, с которого программа будет считать високосный год или нет');
if (isNumber(startYear) == false) {
    while (isNumber(startYear) == false) {
        startYear = prompt('Неправильный ввод данных в первом значении, введите пожалуйста число');
    }
}

endYear = prompt('Введите конечный год, до которого программа будет считать високосный год или нет');
if (isNumber(endYear) == false) {
    while (isNumber(endYear) == false) {
        endYear = prompt('Неправильный ввод данных во втором значении, введите пожалуйста число');
    }
}

startYear = Number(startYear);
endYear = Number(endYear);

if (endYear < startYear) {
    let temp = startYear;
    startYear = endYear;
    endYear = temp;
}

for (let i = startYear; i < endYear; i++) {
    if (i % 4 == 0 && (i % 400 == 0 || i % 100 != 0)) {
        console.log(i);
    }
}