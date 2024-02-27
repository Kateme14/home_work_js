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

// Задание 3

function trimString (str, from, to){
    let startIndex = str.indexOf(from)
    let endIndex = str.indexOf(to)
    if (startIndex === -1 || endIndex === -1 || endIndex<startIndex){
        return str
    }
    return str.substring(startIndex+from.length, endIndex)
}

let stringInput = "Строка, которую я хочу обрезать"
let resultString = trimString(stringInput, "Строка", "хочу")
console.log(resultString)

//Задание 4
function sumOfDigits(number){
    let sum1 = 0
    let startPoint = String(number)
    for(let i=0; i<startPoint.length; i++){
        sum1+=Number(startPoint[i])
    }
    return sum1
}

console.log(sumOfDigits(9987))