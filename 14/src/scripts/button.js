import '../styles/button.scss';

const buttonEl = document.createElement('button');
let numberOfButtonClicks = 0;

buttonEl.className = 'btn';
buttonEl.textContent = 'Нажмите на кнопку, чтобы увидеть количество кликов';

buttonEl.addEventListener('click', function() {
    numberOfButtonClicks = numberOfButtonClicks + 1;
    buttonEl.textContent = `Количество кликов по кнопке: ${numberOfButtonClicks}`;
});

export {buttonEl};