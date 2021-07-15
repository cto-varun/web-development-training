let persons = [
    {
        name: 'vArun',
        age: 32,
        gender: 'Male'
    },
    {
        name: 'Monash',
        age: 21,
        gender: 'Male'
    },
    {
        name: 'Vanshika',
        age: 20,
        gender: 'Female'
    },
    {
        name: 'Hitesh',
        age: 24,
        gender: 'Male'
    }
];

function getPersonDetails(person) {
    // if (person.age > 21)
    if (person.name.trim().toLowerCase().includes('a'))
        console.log(person);
}
persons.forEach(getPersonDetails);