'use strict';

function createGreeting (name, age) {
    if(name === undefined || age === undefined) {
        throw new Error('Arguments not valid');
    } else if(age < 0) {
        throw new Error('Age can not be negative');
    } else if(typeof age !== 'number') {
        throw new TypeError('Age is not a number');
    }

    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

function getYearOfBirth (age) {
    return 2020 - age;
}

try {
    const greeting1 = createGreeting('Chris', 'twenty nine');
    console.log(greeting1);
} catch(err){
    console.log(err);
}

