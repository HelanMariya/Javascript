const baleno ={
    name:"Baleno",
    manufacturer:"Maruthi",
    model:"Hatch-back",
    price:"8lakhs"
}
const glanza ={
    name:"Glanza",
    manufacturer:"Toyota",
    price:"12lakhs"
}
glanza.__proto__= baleno
console.log(glanza.model);
