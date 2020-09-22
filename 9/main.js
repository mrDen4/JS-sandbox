let btnEL = document.querySelector('.js-container__btn');
let containerListEL = document.querySelector('.js-container__list'); 
let inputEL = document.querySelector('.js-container__inp');
let formEL = document.querySelector('.js-container__form');

function addTask(nameTag, text, atr) {
    let containerItemEL = document.createElement(nameTag);
    containerItemEL.className = (atr);
    containerItemEL.textContent = text;

    containerItemEL.addEventListener('click', function(){
        this.classList.toggle('list__item--done');
    });

    containerListEL.appendChild(containerItemEL);
}

formEL.addEventListener ('submit', function(ev){
    addTask("li", inputEL.value, "list__item");
    inputEL.value = '';
    ev.preventDefault();
});