export class Department {
    // public id: string;
    // public name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = d;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}






// it.employees = ['nishan'];

