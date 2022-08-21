// Add Array
const generateCards = data => {
    cardArray = [];

   //Roles
    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = generateManager(employee);
            cardArray.push(managerInfo);
        }
        if (role === 'Engineer') {
            const engineerInfo = generateEngineer(employee);
            cardArray.push(engineerInfo);
        }
        if (role === 'Intern') {
            const internInfo = generateIntern(employee);
            cardArray.push(internInfo);
        }
    }

    const employeeInfo = cardArray.join('');

    // Display
    const createTeam = generatePage(employeeInfo);
    return createTeam;
};

const generateManager = manager => {
    if (!manager) {
        return '';
    }
    return `<div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h2>${manager.name}</h2>
                        <h5 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
    `;
};

const generateEngineer = engineer => {
    if (!engineer) {
        return '';
    }
    return `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h2>${engineer.name}</h2>
                        <h5 class="card-title"><i class="fa-solid fa-laptop-code"></i> ${engineer.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    `;
};

const generateIntern = intern => {
    if (!intern) {
        return '';
    }
    return `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h2>${intern.name}</h2>
                        <h5 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">E-mail: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
    `;
};

const generatePage = data => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <script src="https://kit.fontawesome.com/c5a64ca061.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
</head>
<body>
    
    <div class="container-fluid">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
    
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="row justify-content-center main">
            ${data}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
</body>
</html>
    `;
};

module.exports = generateCards;