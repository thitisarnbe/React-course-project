var nameVar = "Bee";
nameVar = "Mike";
console.log('nameVar',nameVar);

let nameLet = 'Jane';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName(){
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();

console.log('petName',petName);

//Block scoping

const fullName = "Bee CH";
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);