const DECLENSION_HOURS= ['час', 'часа', 'часов'];
const DECLENSION_MINUTES = ['минута', 'минуты', 'минут'];
const DECLENSION_SECONDS = ['секунда', 'секунды', 'секунд'];
const REPEAT_OUTPUT = 1000;
let showDate = setInterval(function () {
  let date = new Date();
  let day = date.getDate();
  let dayOfTheWeek = date.toLocaleString('ru-RU', {weekday: 'long'});
  let monthOfTheYear = date.toLocaleString('ru-RU', {month: 'long'});
  let year = date.getFullYear();
  let hours = date.getHours();  
  let minutes = date.getMinutes();  
  let seconds = date.getSeconds();  
  console.log('Сегодня', day, 
    monthOfTheYear, 
    year, 'года', 
    dayOfTheWeek, 
    hours, declOfNum(hours, DECLENSION_HOURS), 
    minutes, declOfNum(minutes, DECLENSION_MINUTES), 
    seconds, declOfNum(seconds, DECLENSION_SECONDS));
}, REPEAT_OUTPUT);

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
}