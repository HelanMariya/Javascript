// [id,name, designation,location, salary,experience]

employee =[
    [1000, 'Neel', 'developer', 'kochi', 25000,3],
    [1001, 'Max', 'tester', 'TVM', 15000,2],
    [1002, 'Maxwell', 'QA', 'kochi', 35000,4],
    [1003, 'Vyom', 'QA', 'kochi', 45000,5],
    [1004, 'Laisha', 'tester', 'TVM', 55000,7],
    [1005, 'Aahan', 'developer', 'TVM', 15000,1],
    [1006, 'Aahil', 'QA', 'kochi', 20000,2],
    [1007, 'Shayan', 'developer', 'kochi', 30000,3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000,3],
]
// employee with highest salary
console.log(`highest salary :${employee.reduce((a,b)=>a[4]>b[4]? a:b)}`);
// employee with lowest salary
console.log(`lowest salary :${employee.reduce((a,b)=>a[4]<b[4]? a:b)}`);
// total salary
const totalSalary = employee.map(emp=>emp[4]).reduce((a,b)=>a+b)
console.log(totalSalary);




// 1. Print all Employee Name
console.log("************** Employee Name **************")
for(let name of employee)
{
    console.log(name[1]);
    
}
console.log("************** Employee Name **************")
// 2. print Total number of employees
console.log("************** Total number of employees**************")
var count=0
for(let i=0;i<employee.length;i++)
{
count+=1
}
console.log(count);

console.log("************** Total number of employees **************")

// 3. print developer employee details : 
console.log("**************developer employee details **************")
for(let subarray of employee)
{
   if(subarray[2] == "developer")
   {
    console.log(subarray)
   }
        
    
}
// using filter
const newarray= employee.filter(emp=>emp[2]=="developer")
console.log(newarray);

console.log("**************developer employee details **************")

// 4. print employee whose salary > 30000 :filter
console.log("************** employee whose salary > 30000 **************")
for(let subarray of employee)
{
   if(subarray[4] >30000)
   {
    console.log(subarray)
   }
        
    
}

employee.filter(salary=>salary[4]>30000).forEach(emp=>console.log(emp[1]))
console.log("************** employee whose salary > 30000**************")

// 5. print details of employee Laisha
console.log("************** details of employee Laisha **************")
for(let subarray of employee)
{
   if(subarray[1] =="Laisha")
   {
    console.log(subarray)
   }
        
    
}
// find
const array=employee.find(emp=>emp[1]=="Laisha");
console.log(`${array[1]},${array[2]},${array[3]}`);


console.log("************** details of employee Laisha **************")

// 6. Sort employee based on their salary in decending order
console.log("************** Sort employee based on their salary in decending order **************")
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

console.log("************** Sort employee based on their salary in decending order **************")

// 7. sort employee based on their experience in ascending order
console.log("************** sort employee based on their experience in ascending order **************")
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
for(let emp of employee)
{
    console.log(`name:${emp[1]} , experience${emp[5]}`);
    
}
console.log("************** sort employee based on their experience in ascending order **************")