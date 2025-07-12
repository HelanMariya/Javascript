// print all numbers less than 10
var nestedArray=[
    [10,2],[3,4],[90,56],[7,78]
]
for(let subarray of nestedArray)
{
    for(num of subarray)
    {
        if(num<10)
        console.log(num);
        
    }
    
}