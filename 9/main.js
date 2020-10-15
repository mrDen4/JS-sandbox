const toDoListEL = document.querySelector('.container__list-js'); 
const inputToDoEL = document.querySelector('.container__inp-js');
const formAddTaskEL = document.querySelector('.container__form-js');

function elementCreation(nameTag, text, atribute) {
    const containerItemEL = document.createElement(nameTag);
    for (key in atribute){
        containerItemEL.setAttribute(key, atribute[key]);
    }
    containerItemEL.textContent = text;
    return containerItemEL;
}

toDoListEL.addEventListener('click', function(ev){
    if (ev.target.classList.contains('list__item-js')) {
        ev.target.classList.toggle('list__item--done');
    }
});

formAddTaskEL.addEventListener ('submit', function(ev){
    ev.preventDefault();
    toDoListEL.appendChild(elementCreation('li', inputToDoEL.value, {'class': 'list__item list__item-js'}));
    this.reset();
});