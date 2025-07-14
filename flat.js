var numArray=[
    [10,[20]],[30,40],[4,5],[70,60],[90,100]
]
// flat(depth) to reduce the D of array depth=d-1
console.log(numArray.flat(2));
// or use infinity
console.log(numArray.flat(Infinity));
// WAP to print numbers>50
console.log(numArray.flat(Infinity).filter(a=>a>50))
