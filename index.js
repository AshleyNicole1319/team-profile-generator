const inquirer = require('inquirer');
const fs = require('fs');

//Array for Profiles
const teamArray = [];

//Consts for Profiles
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('..lib/Manager');

//Adding Team Members (Engineers or Interns)
const addEmployee = () => {
	return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'Team Complete']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            when: (choice) => choice.role !== 'Team Complete',
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID number.",
            when: (choice) => choice.role !== 'Team Complete',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the employee.',
            when: (choice) => choice.role !== 'Team Complete',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub username.",
            when: (choice) => choice.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school.",
            when: (choice) => choice.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another team member?',
            when: (choice) => choice.role !== 'Team Complete',
            default: true
        }
    ])
    .then(employeeData => {
        if (employeeData.role === 'Engineer') {
            const engineer = new Engineer (employeeData.name, employeeData.id, employeeData.email, employeeData.github);
            teamArray.push(engineer);
        } else if (employeeData.role === 'Intern') {
            const intern = new Intern (employeeData.name, employeeData.id, employeeData.email, employeeData.school);
            teamArray.push(intern);
        }

        if (employeeData.addEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

//Adding a Manager
const addManager = () => {
	return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Team Manager?',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Team Manager's ID number.",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the Team Manager.',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address!');
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Team Manager's office number.",
            validate: managerOfficeNumber => {
                if (managerOfficeNumber) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                }
            }
        }
    ])
    .then(managerData => {
        const manager = new Manager (managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        teamArray.push(manager);
    })
};

//Create the HTML page
const createFile = (fileName, teamArray) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileName, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your team has been created. Look for your new index.html in the `dist` folder.'
            });
        });
    });
};


// initialize app
addManager()
    .then(employeeData => {
        return addEmployee(employeeData)
    })
    .then(data => {
        console.log(data);
        return generateCards(data);
    })
    .then(newFile => {
        return createFile(newFile);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });