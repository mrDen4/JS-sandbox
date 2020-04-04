let showTimeAndDate = setInterval(function () {
  let date = new Date();
  let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  console.log('Сегодня ' + date.toLocaleString('ru', options));
}, 1000);
