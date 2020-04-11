// let showTimeAndDate = setInterval(function () {
//   let date = new Date();
//   let options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
//     timezone: 'UTC',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
//   };
//   console.log('Сегодня ' + date.toLocaleString('ru', options));
// }, 1000);
function declOfNum(number, titles) {

  cases = [2, 0, 1, 1, 1, 2];

  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 

}

let showDate = setInterval(function () {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let daysOfTheWeek = [
    'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'
  ];
  let monthOfTheYear = [
    'января', ' февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  let year = date.getFullYear();
  let dayOfTheWeek = date.getDay();
  let hours = date.getHours();  
  let minutes = date.getMinutes();  
  let seconds = date.getSeconds();  
  console.log('Сегодня', day, monthOfTheYear[month], year, 'года', daysOfTheWeek[dayOfTheWeek], hours, declOfNum(hours, ['час', 'часа', 'часов']), minutes, declOfNum(minutes, ['минута', 'минуты', 'минут']), seconds, declOfNum(seconds, ['секунда', 'секунды', 'секунд']));
}, 1000);