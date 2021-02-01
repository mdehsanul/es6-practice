/*
function doubleIt(num){
    return num*2;
}

const result = doubleIt(10);
console.log(result);
*/
// ----------------------------
/*
const doubleIt = function myNumber(num){
    return num*2;
}

const result = doubleIt(10);
console.log(result);
*/
// ----------------------------

// Arrow function
/*
const singleNumber = () => 5;

const result = singleNumber();
console.log(result);
*/
// -----------------------------
/*
const doubleIt = num => num*2;

const result = doubleIt(10);
console.log(result);

*/
// -----------------------------
/*
const doubleIt = (x, y) => x + y;

const result = doubleIt(50, 10);
console.log(result);
*/
// -----------------------------

const doAdd = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doAdd(30, 10);
console.log(result);

