var car ={
    name:"Baleno",
    model:"hatch-back",
    manufacturer:"Marythi Suzuki",
    price:"13 lakh"
}
// display car name and its manufacturer
console.log(`car:${car.name} manufacturer:${car["manufacturer"]}`);

// check "model" key is present then display its value
console.log(car.hasOwnProperty('model') && car.model);

// add "varient" key and its value as automatic,Manual
car.varient = ["automatic","Manual"]
console.log(car);

// add varient as hybrid
car.varient.push("hybrid")
console.log(car);


// add color as red,white,blue,ash,black
car.color=["red","white","blue","ash","black"]
console.log(car);
