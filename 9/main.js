const ToDoListEL = document.querySelector('.js-container__list'); 
const inputToDoEL = document.querySelector('.js-container__inp');
const formAddTaskEL = document.querySelector('.js-container__form');

function addElement(nameTag, text, atribute) {
    const containerItemEL = document.createElement(nameTag);
    for (key in atribute){
        containerItemEL.setAttribute(key, atribute[key]);
    }
    containerItemEL.textContent = text;
    return containerItemEL;
}

ToDoListEL.addEventListener('click', function(ev){
    if (ev.target.classList.contains('list__item')) {
        ev.target.classList.toggle('list__item--done');
    }
});

formAddTaskEL.addEventListener ('submit', function(ev){
    ev.preventDefault();
    ToDoListEL.appendChild(addElement('li', inputToDoEL.value, {'class': 'list__item'}));
    this.reset();
});