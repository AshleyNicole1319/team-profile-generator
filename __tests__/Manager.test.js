const Manager = require('../lib/Manager');

test('creates manager', () => {
    const manager = new Manager('Ashley', 1, 'Ashley@domain.com', '555-23xx');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    console.log(`Manager Name: ${manager.name}`);
    console.log(`Manager ID: ${manager.id}`);
    console.log(`Manager E-mail: ${manager.email}`);
});

test('creates an office number', () => {
    const manager = new Manager('Ashley', 2, 'Ashley@domain.com', '555-23xx');

    expect(manager.officeNumber).toEqual(expect.any(String));
    console.log(`Office Number: ${manager.officeNumber}`);
});

test('creates a role of manager', () => {
    const manager = new Manager('Ashley', 2, 'Ashley@domain.com', '555-23xx');

    expect(manager.getRole()).toBe('Manager');
});