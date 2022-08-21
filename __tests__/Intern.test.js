const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Ashley', 1, 'Ashley@domain.com', 'UCF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    console.log(`Intern Name: ${intern.name}`);
    console.log(`Intern ID: ${intern.id}`);
    console.log(`Intern E-mail: ${intern.email}`);
});

test('intern school infor', () => {
    const intern = new Intern('Ashley', 1, 'Ashley@domain.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String));
    console.log(intern.school);
});

test('role of intern', () => {
    const intern = new Intern('Ashley', 1, 'Ashley@domain.com', 'UCF');

    expect(intern.getRole()).toBe('Intern');
    console.log(intern.getRole());
});