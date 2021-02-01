const person = {name:'jack william', age: 17, job: 'facebooker', gfName: 'Ema watson', address: 'kochu khet', phone: '01717112211', friends: ['tom hancks', 'tom cruise', 'tom yarn']}

// const gfName = person.gfName;
// const phone = person.phone;
// const address = person.address;

// const { gfName } = person;
// const { phone } = person;
// const { address } = person;

const { phone, gfName, address } = person;

console.log(gfName, phone, address);
console.log(gfName, phone, address);
console.log(gfName, phone, address);
console.log(gfName, phone, address);
console.log(gfName, phone, address);

// ----------------------------------------------------------

const rivers = ["Mississippi", "Delaware", "Ohio", "Sangamon","Black", "Current", "Chattahochee"];
const [firstRiver, nextRiver, ...restRiver] = rivers;
console.log(firstRiver, nextRiver, restRiver);

// ------------------------------------------------------------------

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const { leader } = complexObject.info;
console.log(leader);