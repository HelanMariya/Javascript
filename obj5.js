// display number count
numArray =[10,20,30,40,20,30,40,20,30,50,30,20,60,50,80,20,30]
output={}
numArray.forEach(num=>output.hasOwnProperty(num)?output[num]+=1:output[num]=1)
console.log(output);
