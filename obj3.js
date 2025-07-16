sentence ="hai hello hai hello world hello"
// display word count of each word
// output:{hai:2,hello:3,world:1}

// logic
// convert sentence to an array of words:[hai , hello, hai, hello, world ,hello ]
// create an empty output object:output={}
// get each words from array,check the word is in output object or not
// if word is present:update value of that word by 1 increment
// if word is not present:insert word as key and 1 as its value

output={}

sentence.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(output);
