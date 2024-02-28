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
function getSumNumbers(number){
    let sum1 = 0
    let startPoint = String(number)
    for(let i=0; i<startPoint.length; i++){
        sum1+=Number(startPoint[i])
    }
    return sum1
}

console.log(getSumNumbers(9987))

//Задание 5
function getSum(a, b){
    if(a == b){
        return a
    }
    let startDigit = Math.min(a, b)
    let endDigit = Math.max(a, b)
    let sum2 = 0

    for(i=startDigit; i<=endDigit; i++){
        sum2 += i
    }
    return sum2
}

let finalSum = getSum(8, 12)
console.log(finalSum)

let finalSum1 = getSum(-8, 3)
console.log(finalSum1)

let finalSum2 = getSum(8, 8)
console.log(finalSum2)

let finalSum3 = getSum(5, 10)
console.log(finalSum3)

let finalSum4 = getSum(-4, 2)
console.log(finalSum4)

let finalSum5 = getSum(-2, -2)
console.log(finalSum5)

let finalSum6 = getSum(3, 4)
console.log(finalSum6)

//Задание 6
//Вариант с нестрогим сравнение
function fooBoo(bool, foo, boo){
    if (bool == true){
        foo()
    }
    else{
        boo()
    }
}

function foo(){
    console.log('foo')
}

function boo(){
    console.log('boo')
}

fooBoo(true, foo, boo)
fooBoo(false, foo, boo)
fooBoo(0, foo, boo)
fooBoo(1, foo, boo)

//Вариант со строгим сравнение

function fooBoo(bool, foo, boo){
    if (bool === true){
        foo()
    }
    else{
        boo()
    }
}

function foo(){
    console.log('foo')
}

function boo(){
    console.log('boo')
}

fooBoo(true, foo, boo)
fooBoo(false, foo, boo)
fooBoo(0, foo, boo)
fooBoo(1, foo, boo)

//Задание 1*

function triangle(a, b, c){
    if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
        if(a+b>c && a+c>b && b+c>a){
            return true
        }
    
        else{
            return false
        }
    }
    return false
}

console.log(triangle(8, 9, 12))
console.log(triangle(3, 5, 8))
console.log(triangle(2, 1, 4))

//Задание 2*

function chocolate (n, m){
    if(n<=0 || m<=0){
        return 0
    }
    return (n*m)-1
}

console.log(chocolate(3, 2))
console.log(chocolate(2, 2))
console.log(chocolate(6, 8))
console.log(chocolate(1, 1))
console.log(chocolate(0, 1))