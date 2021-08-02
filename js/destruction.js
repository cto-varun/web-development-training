const person = {
    name: {
        title: "Mr.",
        first: "Varun",
        last: "Sharma"
    },
    age: 32,
    gender: 'Male'
};

// const title = person.name.title;
// const first = person.name.first;
// const last = person.name.last;
// const {
//     name
// } = person;
// cosnt = {
//     title,
//     first,
//     last
// } = name;
const {
    name: {
        title,
        first,
        last
    }
} = person;
console.log(`Name is ${title} ${first} ${last}`);
// console.log(name);