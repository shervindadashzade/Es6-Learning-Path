// object destructuring before es6:
let person = {
    firstname : 'shervin',
    lastname : 'dadashzade',
    bestAge : 19,
}
let age,middlename;
let firstname = person.firstname;
let lastname = person.lastname;
console.log(`${firstname} ${lastname}`);
// es6 method:
// if we have decleare firstname and lastname before we should use parentheses
({  firstname,
    lastname,
    //default value
    middlename='middle',
    //diffrent variable with diffrent property name very important
    bestAge:age=20
    // for if person return null
} = person || {});
console.log(`${firstname} ${lastname} is at ${age} with this middlename ${middlename}`);
// nested objects
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }
// functions destructuring objects arguments
shervin = {
    hisfirstname : 'shervin',
    hislastname :  'dadashzade'
};
console.log(shervin);
let display = ({hisfirstname, hislastname}) => console.log(`${hisfirstname} ${hislastname}`);
display(shervin);
