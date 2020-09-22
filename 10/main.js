let btnEditEL = document.querySelector('.js-btns__btn-edit');
let btnSaveEL = document.querySelector('.js-btns__btn-save');
let btnCancelEL = document.querySelector('.js-btns__btn-cancel');
let textEL = document.querySelector('.js-editor__text');

function changeAtr(elemArr, atr){
    for (let i = 0; i < elemArr.length; i++) {
        elemArr[i].toggleAttribute(atr);
    }
};

if (localStorage.getItem('text') !== null) {
    textEL.textContent = localStorage.getItem('text');
    console.log('true');
} else {
    localStorage.setItem('text', textEL.textContent);
    console.log(false);
}

btnEditEL.addEventListener('click', function() {
    changeAtr([btnEditEL,btnSaveEL,btnCancelEL], 'disabled');
    changeAtr([textEL], 'contenteditable');
});

btnSaveEL.addEventListener('click', function() {
    localStorage.setItem('text', textEL.textContent);
    changeAtr([btnEditEL,btnSaveEL,btnCancelEL], 'disabled');
    changeAtr([textEL], 'contenteditable');
});

btnCancelEL.addEventListener('click', function() {
    textEL.textContent = localStorage.getItem('text');
    changeAtr([btnEditEL,btnSaveEL,btnCancelEL], 'disabled');
    changeAtr([textEL], 'contenteditable');
});