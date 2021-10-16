const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRender');
const employee = require('./lib/employee');

//Questions to gether employee information
const questions = [
    { name: 'name', message: "What's the employee's name?" },
    { name: 'id', message: "What's the employee's id?" },
    { name: 'email', message: "What's the employee's email?" },
    {
        type: 'list',
        name: 'role',
        message: "What's the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];

const questionForManager = [
    { name: 'officeNumber', message: "What's the manager's office number?" },
];

const questionForEngineer = [
    { name: 'officeNumber', message: "What's the engineer's github?" },
];


const questionForIntern = [
    { name: 'school', message: "What's the intern's school?"},
];

const confirm = [
    {
        type: 'confirm',
        name: 'adding',
        message: 'Do you want to input more employee information?',
    },
];

const init = async () => {
    const employees = [];
    let addMore = true;

    while (addMore) {
        const { name, id, email, role } = await inquirer.prompt(questions);

        if (role === 'Manager') {
            const { officeNumber } = await inquirer.prompt(questionfForManager);

            employees.push(new manager(name, id, email, officeNumber));
        } else if (role === 'Engineer') {
            const { github } = await inquirer.prompt(questionForEngineer);

            employees.push(new engineer(name, id, email, github));
        } else {
            const { school } = await inquirer.prompt(questionForIntern);

            employees.push(new intern(name, id, email, school));
        }

        const { adding } = await inquirer.prompt(confirm);

        addMore = adding;
    }

    const html = render(employees);

    if (!fs.existsSync(outputPath)) {
        const error = await mkdirAsync(OUTPUT_DIR);
        error && console.error(error);
    }

    const error = await writeFileAsync(outputPath, html);
    error && console.error(error);

};

init();