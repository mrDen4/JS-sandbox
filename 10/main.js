const btnEditEL = document.querySelector('.js-btns__btn-edit');
const btnSaveEL = document.querySelector('.js-btns__btn-save');
const btnCancelEL = document.querySelector('.js-btns__btn-cancel');
const textEL = document.querySelector('.js-editor__text');
const SAVEDTEXT = 'text';

function changeAtr(elementsArray, atributeElements){
    for (let i = 0; i < elementsArray.length; i++) {
        elementsArray[i].toggleAttribute(atributeElements);
    }
};

if (localStorage.getItem(SAVEDTEXT) !== null) {
    textEL.textContent = localStorage.getItem(SAVEDTEXT);
} else {
    localStorage.setItem(SAVEDTEXT, textEL.textContent);
}

btnEditEL.addEventListener('click', function() {
    changeAtr([btnEditEL,btnSaveEL,btnCancelEL], 'disabled');
    changeAtr([textEL], 'contenteditable');
});

btnSaveEL.addEventListener('click', function() {
    localStorage.setItem(SAVEDTEXT, textEL.textContent);
    changeAtr([btnEditEL,btnSaveEL,btnCancelEL], 'disabled');
    changeAtr([textEL], 'contenteditable');
});

btnCancelEL.addEventListener('click', function() {
    textEL.textContent = localStorage.getItem(SAVEDTEXT);
    changeAtr([btnEditEL,btnSaveEL,btnCancelEL], 'disabled');
    changeAtr([textEL], 'contenteditable');
});