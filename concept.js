// Array Concept
// enable storing a collection of multiple items under a single variable name.
let array =[11, 22 ,33 , 44, 55]

// .length
let numbers =[13, 33, 12, 33, 7, 87, 44]
console.log(numbers.length);

// index[]
console.log(numbers[2]);

// push and pop
console.log(numbers.push(45)) //adding new element
// console.log(numbers);

const friends =['mina', 'tina', 'rima']
friends.push('lima')
// console.log(friends);


console.log(numbers.pop()) //removing last element
// console.log(numbers);

const fruits =['mango', 'guava', 'lichi', 'banana', 'coconut']
fruits.pop();
// console.log(fruits);

// shift and unshift
// console.log(numbers.shift())
// console.log(numbers)

// console.log(numbers.unshift());
// console.log(numbers);

// .includes
// console.log(numbers.includes(66));

// knowing index or array elements
// console.log(numbers.indexOf(44));

// array check
let mimi ='mimi';
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(mimi));

// .join method
let flowers =['lily', 'rose', 'belly']
let fruit =['mango', 'lichi', 'plam']
const mixed =[...flowers, ...fruits].join(',')
console.log(mixed);

// concat method
const data1 =['mina', 'lina', 'toru'];
const data2 =['riju', 'akash', 'priya'];
console.log(data1.concat(data2));

// slice method
const nmbers =[1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log(nmbers.slice(1,5)) //index
// splice method
console.log(nmbers.splice(1,5)) //index