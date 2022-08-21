const Employee = require('../lib/Employee');

test('object for employee', () => {
    const employee = new Employee('Ashley', 1, 'Ashley@domain.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    console.log(`Employee Name: ${employee.name}`);
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee E-mail: ${employee.email}`);
});

test('name of employee', () => {
    const employee = new Employee('Ashley', 1, 'Ashley@domain.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('ID of employee', () => {
    const employee = new Employee('Ashley', 1, 'Ashley@domain.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('email of employee', () => {
    const employee = new Employee('Ashley', 1, 'Ashley@domain.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('role for the employee', () => {
    const employee = new Employee('Ashley', 1, 'Ashley@domain.com');

    expect(employee.getRole()).toBe('Employee');
}); 