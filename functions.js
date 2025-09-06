function greet(){
    console.log("welcome t DevAstra")
}
greet()

function add(x,y){
    return x+y
}

let result=add(10,20)
console.log(result)

const multiply = function(x,y){
    return x*y
}

console.log(multiply(3,4))

//arrow function
const square =(x)=> x*x
console.log(square(5))
const subtract = (x,y)=>{
    console.log(x,y)
    return x-y
}
console.log(subtract(30,20))

