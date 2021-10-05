const buttom = document.querySelector('.edit-salary');
const closeButtom = document.querySelector('.close');
buttom.addEventListener('click', openModal);
closeButtom.addEventListener('click', closeModal);


function openModal() {
    const modal = document.querySelector('.modal-background');
    modal.classList.add('on');
};

function closeModal() {
    const modal = document.querySelector('.modal-background');
    modal.classList.remove('on');
};