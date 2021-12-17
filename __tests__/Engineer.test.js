const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', '1234', 'gimlisonofgloin@icloud.com', 'HRO0806');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('gimlisonofgloin@icloud.com');
    expect(engineer.github).toBe('HRO0806');
});

test('Gets the github username', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getGithub()).toEqual(engineer.github);
});

test('Get the role of the employee', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getRole()).toEqual('Engineer');
})