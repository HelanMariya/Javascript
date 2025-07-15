// create a employee object
const employee={
    empId:1000,
    empname:"Ram",
    empDesg:"Developer",
    empLocation:"Kochi",
    empSalary:25000,
    empExperience:2
}
console.log(`Type of Employee:${typeof employee}`);
console.log(employee);
// bracket Notation
console.log(`employee name ${employee["empname"]}`);

// Dot Notation
console.log(`employee salary${employee.empSalary}`)
// in property
console.log(`is key empid in employee:${"empId" in employee}`);
// hasownProperty
console.log(`is empsalary in employee:${employee.hasOwnProperty("empSalary")}`);

// adding data in to object

employee.empGender="Male"
Object.assign(employee,{empVaccineStatus:true})

// updating values
employee.empVaccineStatus=false
console.log(employee);
// display keys
console.log(Object.keys(employee))
console.log(Object.values(employee))
// display in array form

console.log(Object.entries(employee))
// delete key
delete employee.empVaccineStatus
console.log(employee);

// display employee object as key-value pair
for(let key in employee)
{
    console.log(`${key} : ${employee[key]}`);
}
// destructuring of employee object
const {empDesg,empname,empId}=employee
console.log(`designation :${empDesg}`);

