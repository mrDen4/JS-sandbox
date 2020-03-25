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
  alert('Сегодня ' + date.toLocaleString('ru',options));