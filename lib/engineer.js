/*Requiring the employee file */
const Employee = require('./employee');

/*Creating the Engineer class to add additional info to the employee class */
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    /*Returns the role */
    getRole() {
        return 'Engineer';
    }

    /*Returns the engineers github */
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;