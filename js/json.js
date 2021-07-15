// var books = {
//     "js": 100,
//     "rubyonrails": 200,
//     "html": 400,
//     "css": 500
// };
// console.log(Object.keys(books));


var person = {
    name: "Varun",
    gender: 'Male',
    job: "Full Stack Developer"
};
function getPersonDetails(p) {
    console.log(`Person's ${p.toUpperCase()} is ${person[p]}`);
}
// console.log(`Name of person is ${person.name} and his profile is ${person.job}`);
let personKeys = Object.keys(person);
// console.log(personKeys);
personKeys.forEach(getPersonDetails);
