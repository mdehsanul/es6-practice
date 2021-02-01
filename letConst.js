// use of const and let

// not re-assignable
const hubby = "Elias Kanchon";
console.log(hubby);

// re-assignable using array
const number = [12, 45]
number[0] = 88;
number.push(36);
console.log(number);

// have to use under scope
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(i);
}
//console.log(i);

