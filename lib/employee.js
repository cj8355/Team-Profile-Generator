/*Creates the employee class with the properties of name, email, id */
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    /*Returns the employee's name */
    getName () {
        return this.name;
    }

    /*Returns the employee's ID */
    getId () {
        return this.id;
    }

    /*Returns the employees email */
    getEmail () {
        return this.email;
    }

    /*Returns the employees role */
    getRole () {
        return 'Employee';
    }

};

module.exports = Employee;