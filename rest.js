function add(...arg){
console.log(arg);
console.log(`Result = ${arg.reduce((a,b)=>a+b)}`);
}
add(20,10)
add(40,50,70,10)