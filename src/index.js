function findSolution(target){
    const firstNumber = Number (prompt('Enter first number'));
    const secondNumber = Number (prompt('Enter second number'));
    const thirdNumber = Number (prompt('Enter third number'));
    
    if (isNaN (firstNumber)){
        alert('Please enter a number');
    }else if (isNaN(secondNumber)){
        alert('Please enter a number');
    }else if (isNaN (thirdNumber)){
        alert('Please enter a number');
    }else{
        function find(current, history){
            if(current === target){
                return history;
            }else if(current > target){
               return null; 
            }else{
                return find(current * firstNumber, `${history} * ${firstNumber}`) || find(current * secondNumber, `${history} * ${secondNumber}`) || find(current + thirdNumber, `(${history} + ${thirdNumber})`);
            }
        }
        return find(1, '1');
    }
}
    console.log(findSolution(15));