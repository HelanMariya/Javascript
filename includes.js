const nameArray=["mini","mili","rini","Tini","Rani"]
// is rini is present
console.log(nameArray.includes("rini"));
// display index of rini
console.log(nameArray.indexOf("rini"));
// remove rini
const index=nameArray.indexOf("rini")
nameArray.splice(index,1)
console.log(nameArray);
