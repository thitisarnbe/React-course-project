console.log('destructuring');

// Object destructuring
//const person = {
//   name:'Bee',
//   age:26,
//   location:{
//      'city':'Chiang mai',
//      'temp':24
//   }
//};
//
//const {name,age}= person;
//
//console.log(`${name} ${age}`);
//
//const {city,temp:temperature} = person.location;
//if(city && temperature){
//   console.log(`It's ${temperature} in ${city}.`);
//}
//
//const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//      name:'Penguin',
//   }
//};
//
//const {name:publisherName} = book.publisher;
//console.log(publisherName);

// Array destructuring
//const address = ['someroad','Mae rim','Chiang mai','50180'];
//
//const [,city,province,zip] = address;
//
//console.log(`You are in ${city} ${province} ${zip}`)

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [medium_coffee,,medium_coffee_price] = item;

console.log(`A medium ${medium_coffee} costs ${medium_coffee_price}`)