const Intern = require('../lib/Intern.js');

test('Creates an intern object', () => {
    const intern = new Intern('John', '567', 'henryolson@icloud.com', 'Concordia Academy');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('567');
    expect(intern.email).toBe('henryolson@icloud.com');
    expect(intern.school).toBe('Concordia Academy');
})

test('Gets the school name of the intern', () => {
    const intern = new Intern('John');

    expect(intern.getSchool()).toEqual(intern.school);
})

test('Gets the role of employee', () => {
    const intern = new Intern('John');

    expect(intern.getRole()).toEqual('Intern');
})