let x=19,y=4

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)


//assignment operators

let z=6

console.log(z)
z+=3
console.log(z)
z-=4
console.log(z)
z*=2
console.log(z)
z/=2
console.log(z)
z%=4
console.log(z)
z**=5


//comparison operators

let a=10,b="10"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)

//logical operators

let age=19
console.log(age>=19 && age<=30)
console.log(age<19 || age>19)
console.log(age<18)


//string operator

let firstname="Teja"
let lastname="Sri"
let fullname=firstname+lastname
console.log(fullname)
let correctName=`hello $(firstname) $(lastname), welcome`
console.log(correctName)

//ternary operator

let myAge=19
if(myAge>=18){
    console.log("eligible to vote")
}else{
    console.log("you cannot vote")

}
let result=myAge>=18 ? "eligible to vote":"you cannot vote"
console.log(result)

//increment and decrement operator

let count=3
console.log(count++)
console.log(count)
console.log(++count)

//type of operator

console.log(typeof count)
console.log(typeof teja)
console.log(typeof 18)