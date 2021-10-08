export default function toggleModal() {
    const modal = document.querySelector('.modal-background');
    const input = document.querySelector('#salary');
    modal.classList.toggle('on');
    input.focus();
};