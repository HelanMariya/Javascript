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
console.log(`employee name ${employee.empname}`);

// Dot Notation
console.log(`employee salary${employee.empSalary}`)
// in property
console.log(`is key empid in employee:${"empId" in employee}`);
// hasownProperty
console.log(`is empsalary in employee:${employee.hasOwnProperty("empSalary")}`);
