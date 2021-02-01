// caret sign -> ``

const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " " + 'is a good boy' ;
console.log(fullName)
//template string
const fullName2 = `${firstName} ${lastName} is a good bot`;
console.log(fullName2);

//  -----------------------------------------------------------

// old system
const multipline = "I love you \n"
                 + "I need you \n"
                 + "I miss you";
console.log(multipline);

// new system
// multiline string
const multipline2 = `I love you
I need you
I miss you`;
console.log(multipline2);