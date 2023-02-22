function Employee(_name, _age, _designation) {
    this.name = _name;
    this.age = _age;
    this.designation = _designation;

    this.setAge = (newAge) => {
        console.log(`Age has been changed from ${this.age} to ${newAge}`);
        this.age = newAge;
    };
}

Employee.prototype.lol = "haha";
let empl = new Employee("Mark", 24, "Manager");
let emp2 = new Employee("Kev", 45, "Accountant");
let emp3 = new Employee("Baby", 5, "Accountant");
console.log(empl.age);
empl.setAge(43);
console.log(empl.age);
console.log(emp2.age);
console.log(emp2.lol);
console.log(emp2.role);

Employee.prototype.office = "True";
empl.officeNumber = 101;
p = {role: "User", status: "active"};
Object.setPrototypeOf(Employee, p);
console.log(empl.officeNumber, emp2.officeNumber);
console.log(emp2.role, emp2.role);
console.log(Object.getPrototypeOf(Employee));
console.log(empl.prototype === emp2.prototype);