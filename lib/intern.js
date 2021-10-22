/*Requiring the employee file */
const employee = require('./employee');

/*Creating the Intern class to add additional info to the employee class */
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    /*Returns the role */
    getRole() {
        return 'Intern';
    }

    /*Returns the intern's school */
    getSchool() {
        return this.school;
    }
}

module.exports = intern;