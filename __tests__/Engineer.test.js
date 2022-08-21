const Engineer = require('../lib/Engineer');

test('object for Engineer', () => {
    const engineer = new Engineer('Ashley', 1, 'Ashley@domain.com', 'Randomness');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    console.log(`Engineer Name: ${engineer.name}`);
    console.log(`Engineer ID: ${engineer.id}`);
    console.log(`Engineer E-mail: ${engineer.email}`);
});

test('gets github info', () => {
    const engineer = new Engineer('Ashley', 1, 'Ashley@domain.com', 'Randomness');

    expect(engineer.github).toEqual(expect.any(String));
});

test('creates a role of engineer', () => {
    const engineer = new Engineer('Ashley', 1, 'Ashley@domain.com', 'Randomness');

    expect(engineer.getRole()).toBe('Engineer');
});