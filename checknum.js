// check 2 is present in this array
numbers=[1,2,3,4,5,10,23]

for(let num of numbers){
    if(num==2)
    {
        console.log(`${num} is present at position ${numbers.indexOf(num)}`)
    }
}
// using common for loop
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]==2)
    {
        console.log("2 is prestent at position :",i);
        
    }
}