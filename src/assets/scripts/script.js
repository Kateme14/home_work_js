// Задание1

function getSum(num){
    let sum=0
    for(i=0; i<=num; i++){
        sum+= i
    }
    return sum
}

let result=getSum(100)
console.log(result)

let result2=getSum(200)
console.log(result2)

// Задание 2

function creditCalc(creditSum){
    const percent = 0.17
    const years = 5
    extraPayment = creditSum * percent * years
    return extraPayment
}

let myCredit = creditCalc(5000)
console.log(myCredit)

let yourCredit = creditCalc(8900)
console.log(yourCredit)