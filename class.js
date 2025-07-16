class Employee{
    // properties
    empId
    empName
    empSalary
    empDesig
    // method
    constructor(id,name,salary,designation)
    {
    this.empId =id
    this.empName=name
    this.empSalary=salary
    this.empDesig=designation
    }
    displayEmp(){
        console.log(`Employee Details:${this.empId}`);
        
    }
}
const emp1 = new Employee(100,"Max",30000,"Tester")
emp1.displayEmp()