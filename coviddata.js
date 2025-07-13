// [no,district,+ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
    [1,'Ernakulam', 34000,2000,23000,20000,2000],
    [2,'Idukki', 14000,3000,25000,30000,1000],
    [3,'Thrissur', 24000,4000,33000,24000,2500],
    [4,'Pathanamthitta', 20000,2000,45000,22000,1500],
    [5,'Kozhikode', 44000,5000,12000,21000,500],
    [6,'Palakkad', 27000,1000,20000,23000,3400],
    [7,'Kottayam', 27000,1500,27000,14000,1000],
    [8,'Kollam', 14000,2500,25000,18000,2700]
]
//1. District having Highest +ve case
console.log("Highest +ve case");

const result=covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(result);

//2. District having highest 1st dose vaccine
console.log("highest 1st dose vaccine");
const result1=covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(result1);
//3. District having lowest death rate
console.log("lowest death rate");

const death_rate=covid_data.reduce((a,b)=>a[4]>b[4]?b:a)
console.log(death_rate);
//4. sort data with +ve case in descending order :
console.log("+ve case in descending order");

covid_data.sort((a,b)=>b[2]-a[2]).forEach(a=>console.log(a[1]))

//5. Is districts with +ve cases > 15000 ?
console.log("Is districts with +ve cases > 15000");

 const value =covid_data.some(a=>a[2]>15000)
 console.log(value);
 
//6. Is all districts with +ve cases > 15000 ?

//7. sort data with 1st dose vaccine
//8. Print thrissur details: 
//9. Print total number of positive cases: 
//10. Print total number of curred cases
//11. print curred cases in idukki: