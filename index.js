const person ={
    name: "pepe",
    lastname: "perez",
    age:30,
    country: "colombia"
}


const number=[30,40,50,60]
//for in para los objetos

for (let atri in person){
    console.log(person)
}

//for of para obejetos iterables -arrays o strings

for (let ele of number){
    console.log (ele)
}