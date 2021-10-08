import toggleModal from "./modal.js";
import { slice, storage, formatMoney } from "./salary.js"

const buttom = document.querySelector('.edit-salary');
buttom.addEventListener('click', toggleModal);

const closeButtom = document.querySelector('.close');
closeButtom.addEventListener('click', toggleModal);

function setDomValues(salary, requiredAccount, investment, freePass, books){
    document.querySelector('#salary').value = salary;    
    document.querySelector('#textSalary').innerText = `R$ ${formatMoney(Number(salary))}`;
    document.querySelector('#requiredAccount').innerText = `R$ ${formatMoney(Number(requiredAccount))}`;
    document.querySelector('#investment').innerText = `R$ ${formatMoney(Number(investment))}`;
    document.querySelector('#freePass').innerText = `R$ ${formatMoney(Number(freePass))}`;
    document.querySelector('#books').innerText = `R$ ${formatMoney(Number(books))}`;
};

const input = document.querySelector('#salary');
input.addEventListener('keypress', (event) => {
    const enter = event.keyCode;
    if(enter === 13) {
        const { salary, requiredAccount, investment, freePass, books } = slice();

        setDomValues(salary,requiredAccount,investment,freePass,books);

        storage(salary);
        
        toggleModal();
        input.blur();
    };
});

const salary = localStorage.getItem('currentSalary');
input.value = salary;
const { requiredAccount, investment, freePass, books } = slice();
setDomValues(salary,requiredAccount,investment,freePass,books);