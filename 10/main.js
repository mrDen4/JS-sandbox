let btnEdit = document.querySelector('.btns__btn-edit');
let btnSave = document.querySelector('.btns__btn-save');
let btnCancel = document.querySelector('.btns__btn-cancel');
let text = document.querySelector('.editor__text');
if (localStorage.getItem('text')) {
    text.textContent = localStorage.getItem('text');
} else {
    localStorage.setItem('text', text.textContent);
}

btnEdit.addEventListener('click', function() {
    text.setAttribute('contenteditable', 'true');
    btnEdit.setAttribute('disabled', 'true');
    btnSave.removeAttribute('disabled');
    btnCancel.removeAttribute('disabled');
});

btnSave.addEventListener('click', function() {
    localStorage.setItem('text', text.textContent);
    btnSave.setAttribute('disabled', 'true');
    btnCancel.setAttribute('disabled', 'true');
    btnEdit.removeAttribute('disabled');
})

btnCancel.addEventListener('click', function() {
    text.textContent = localStorage.getItem('text');
    btnSave.setAttribute('disabled', 'true');
    btnCancel.setAttribute('disabled', 'true');
    btnEdit.removeAttribute('disabled');
})