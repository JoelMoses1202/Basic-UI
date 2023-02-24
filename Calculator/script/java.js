// Calculator Exercise
let calculator = {
    add: function (num1,num2){
        return num1+num2;
    },
    subract: function (num1,num2)
    {
        return num1-num2;
    },
    divide: function (num1,num2)
    {
        return num1/num2;
    },
    multiply: function (num1,num2)
    {
        return num1*num2;
    }
}

console.log(calculator.add(2,3));
console.log(calculator.subract(2,3));
console.log(calculator.multiply(2,3));
console.log(calculator.divide(2,3));

