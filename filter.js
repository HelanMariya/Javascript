var numArray = [10,20,30,2,3,5,76,89]
// print all odd numbers

const newArray = numArray.filter(num=>num%2!==0)
console.log(newArray)

// print all numbers>50
const array2=numArray.filter(num=>num>50)
console.log(array2);

// print an array with squares of the numbers
console.log( numArray.map(num=>num**2));

// print a new array with values satisfying the given conditions ,if existing array value is>50 the decrement its value by 1 else increment its value by 1
console.log(numArray.map(num=>num>50? --num:++num));
 
// find largest number
console.log(` largest number ${numArray.reduce((a,b)=>a<b? b:a)}`)
// find least number
console.log(` least number ${numArray.reduce((a,b)=>a<b? a:b)}`)
// find total number
console.log(` total number ${numArray.reduce((a,b)=>a+b)}`)