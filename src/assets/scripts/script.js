let x = 20
let y = 58 
let z = 42
console.log(x + y + z);

let seconds = 60
let minutes = 60
let hours = 24
let days = 365
let myAge = 32

console.log(myAge * days * hours * minutes * seconds)

let count = 42
let userName = '42'

console.log(count + '')
console.log(String(count))
console.log(count.toString())
console.log(`${count}`)

console.log(parseInt(userName))
console.log(Number(userName))

let a = 1
let b = 2
let c = 'белых медведей'
console.log(`${a}${b} ${c}`)

let firstWord = "доступ"
let secondWord = "морпех"
let thirdWord = "наледь"
let fourthWord = "попрек"
let fifthWord = "рубило"
let lengthWords = firstWord.length + secondWord.length + thirdWord.length + fourthWord.length + fifthWord.length

console.log(lengthWords)

let firstName = "Masha"
let age = 25
let single = true

console.log(`Variable: firstName have type ${typeof firstName}`)
console.log(`Variable: age have type ${typeof age}`)
console.log(`Variable: single have type ${typeof single}`)

console.log(prompt("имя"), prompt("возраст"))


let f = 4
let q = 3

f = f + q
q = f - q
f = f - q

console.log("f =", f)
console.log("q =", q)

let codeWord1 = "обернись"
let codeWord2 = "неужели"
let codeWord3 = "огурцы"
let codeWord4 = "липкие"
let codeWord5 = "?!"
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(cipher)