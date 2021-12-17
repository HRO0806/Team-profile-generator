const Manager = require('../lib/Manager.js');

test('Creates a manager object', () => {
    const manager = new Manager('Bob', '8910', 'henryolson@me.com', '10');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('8910');
    expect(manager.email).toBe('henryolson@me.com');
    expect(manager.office).toBe('10');
})

test('Gets the office number of the manager', () => {
    const manager = new Manager('Bob');

    expect(manager.getOffice()).toEqual(manager.office);
})

test('Gets the role of employee', () => {
    const manager = new Manager('Bob');

    expect(manager.getRole()).toEqual('Manager');
})



