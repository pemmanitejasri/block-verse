let marks=85
if(marks>+90){
    console.log("A grade")
}
else if(marks>50)
{
    console.log("B grade")
}
else{
    console.log("fail")
}

let day=5
switch(day){
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("default")
        break     
}
 let colors=["Red","Blue","green"]
 for(let i=0;i<colors.length;i++){
    console.log(colors[i])
 }

 let person={
    Name:"teja",
    age:18,
    college:"jntu"
 }

 for(let key in person){
    console.log(`$(key): &(person[key])`)
 }
 