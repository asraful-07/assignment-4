function calculateTax(income, expenses) {
    if(calculateTax < 0 ){
        return 'Invalid Input';
    }
    let total = income - expenses;
    let remaingAmount = total * .20;
    return remaingAmount;
    
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
