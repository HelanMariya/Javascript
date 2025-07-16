// find the first recursive character from the given pattern="ABCCDDAAB"
// ans:c

pattern="ABCCDDAABB"
output={}
charArray = pattern.split("")
for(let char of charArray)
{
    if(char in output){
        console.log(`First recursive charecter${char}`);
        break;
    }
    else{
        output[char]=1
    }
}