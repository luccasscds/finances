export function get(){
    return document.querySelector('#salary').value;
};

export function slice() {
    const salary = get();
    const requiredAccount = salary * 0.55;
    const investment = salary * 0.3;
    const freePass = salary * 0.1;
    const books = salary * 0.05;
    return {salary, requiredAccount, investment, freePass, books};
};

export function storage(salary){
    localStorage.setItem('currentSalary', salary);
}; 