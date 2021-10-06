import toggleModal from "./modal.js";
import { get, slice, storage } from "./salary.js"

const buttom = document.querySelector('.edit-salary');
buttom.addEventListener('click', toggleModal);

const closeButtom = document.querySelector('.close');
closeButtom.addEventListener('click', toggleModal);

const input = document.querySelector('#salary');
input.addEventListener('keypress', (event) => {
    const enter = event.keyCode;
    if(enter === 13) {
        const { salary, requiredAccount, investment, freePass, books } = slice();
        const salaryText = document.querySelector('#textSalary');
        const requiredAccountText = document.querySelector('#requiredAccount');
        const investmentText = document.querySelector('#investment');
        const freePassText = document.querySelector('#freePass');
        const booksText = document.querySelector('#books');

        salaryText.innerText = `R$ ${Number(salary).toFixed('2').replace('.',',')}`;
        requiredAccountText.innerText = `R$ ${Number(requiredAccount).toFixed('2').replace('.',',')}`;
        investmentText.innerText = `R$ ${Number(investment).toFixed('2').replace('.',',')}`;
        freePassText.innerText = `R$ ${Number(freePass).toFixed('2').replace('.',',')}`;
        booksText.innerText = `R$ ${Number(books).toFixed('2').replace('.',',')}`;
        storage(salary);
        toggleModal();
    };
});

function setDom(){
    const salary = localStorage.getItem('currentSalary');
    document.querySelector('#salary').value = salary;
    const { requiredAccount, investment, freePass, books } = slice();
    
    document.querySelector('#textSalary').innerText = `R$ ${Number(salary).toFixed('2').replace('.',',')}`;
    document.querySelector('#requiredAccount').innerText = `R$ ${Number(requiredAccount).toFixed('2').replace('.',',')}`;
    document.querySelector('#investment').innerText = `R$ ${Number(investment).toFixed('2').replace('.',',')}`;
    document.querySelector('#freePass').innerText = `R$ ${Number(freePass).toFixed('2').replace('.',',')}`;
    document.querySelector('#books').innerText = `R$ ${Number(books).toFixed('2').replace('.',',')}`;
}
setDom();