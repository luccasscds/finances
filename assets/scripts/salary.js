export function get(){
    const value = Number(document.querySelector('#salary').value);
    if(value < 0) return Math.abs(value);
    return value === 0 || value <= 1_000_000 ? value : false; 
};

export function slice() {
    const salary = get();
    const requiredAccount = Number((salary * 0.55).toFixed('3'));
    const investment = Number((salary * 0.3).toFixed('3'));
    const freePass = Number((salary * 0.1).toFixed('3'));
    const books = Number((salary * 0.05).toFixed('3'));
    return {salary, requiredAccount, investment, freePass, books};
};

export function storage(salary){
    localStorage.setItem('currentSalary', salary);
};

export function formatMoney(int) {
    return int.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}