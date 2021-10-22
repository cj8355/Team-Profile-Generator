/*Requiring the employee file */
const Employee = require('./employee');

/*Creating the Manager class to add additional info to the employee class */
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    /*Returns the role */
    getRole() {
        return "Manager";
    }

    /*Returns the managers office number */
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;