a1 =[10,20,30,40]
a2=[30,40,50,60]
// using for of loop

for(let a of a1){
    for(let b of a2)
    {
        if(a==b){
            console.log(a)
        }
    }
}
// using common for loop
for(let i=0;i<a1.length;i++)
{
    for(let j=0;j<a2.length;j++)
    {
        if(a1[i]==a2[j])
        {console.log(a1[i])}
    }
}