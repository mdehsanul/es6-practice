const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [26, 36, 22, 29];

// concatenate multiple arrays
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);

// -------------------------------------------------

const allAges2 = [ages, ages2, ages3];
console.log(allAges2);
// Spread operator
const allAges3 = [...ages, ...ages2, ...ages3];
console.log(allAges3);

// -------------------------------------------------

// array max 
const business = 650;
const minister = 4500;
const sochib = 250;
//const maximum = Math.max(business, minister, sochib);
const totalTaka = [650, 4500, 250, 850, 100];
const maximum = Math.max(...totalTaka);
console.log(maximum);
