let person={
    name:"tejasri",
    age:19
}


console.log(person.name)
console.log(person["age"])

const {name,age}=person
console.log(name)
console.log(age)

let fruits=["apple","banana","mango"]
console.log(fruits[0])

let number=[1,2,3,4,5]

let squares=number.map((num)=>num*num)
console.log(squares)

let evens=number.filter((num)=>num%2==0)
console.log(evens)

let sum=number.reduce((present,num)=>num,0)
console.log(sum)

let persons = [
    {
        name:"teja",
        marks:85
    },
    {
        name:"durga",
        marks:70
    },
    {
        name:"venky",
        marks:90
    },
    {
        name:"manga",
        marks:50
    }
]
let maxMarks=0
let topper=""
for(let person of persons){
    if(person.marks>maxMarks){
        maxMarks=person.marks
        topper=person.name
    }
}

console.log(`Topper is $(topper) and he got $(maxMarks)`)