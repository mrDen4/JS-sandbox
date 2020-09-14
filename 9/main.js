let btn = document.querySelector('.container__btn');
let containerList = document.querySelector('.container__list'); 
let input = document.querySelector('.container__inp');

function addTask(inp) {
    let containerItem = document.createElement("li");
    containerItem.className = ("list__item");
    containerItem.textContent = inp;

    containerItem.addEventListener('click', function(){
        this.classList.toggle('list__item--done');
    });

    containerList.appendChild(containerItem);
}

btn.addEventListener ('click', function(){
    if (input.value !== '') {
        addTask(input.value);
        input.value = '';
    } else {
        alert('Введите задачу')
    }
});