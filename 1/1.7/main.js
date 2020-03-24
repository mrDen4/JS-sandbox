const userName = prompt('Ваше имя?');
    userLastName = prompt('Ваша фамилия?');
    userBirthdayYear = prompt('Ваш год рождения?');
    userAge = new Date().getFullYear() - userBirthdayYear;

if (userAge < 20) {
    alert('Привет ' + userName + ' ' + userLastName + '!');
} 

if (userAge >= 20 && userAge <= 40) {
    alert('Добрый день ' + userName + ' ' + userLastName + '!');
}

if (userAge >40) {
    alert('Здравствуйте ' + userName + ' ' + userLastName + '!');
}