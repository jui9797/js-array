/**
 * 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
 */
let fruits =['mango', 'lichi', 'orange', 'banana', 'plam']
fruits[1] ='jambura';
console.log(fruits);
console.log(fruits[2]);

/**
 * 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */
let destinations =['maldives', 'paris', 'hawai'];
destinations.push('italy', 'brazil');
destinations.pop();
console.log(destinations);


/**
 * 3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */
let books =['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'javaScript'];
console.log(books.includes('javaScript' ));
console.log('the javaScript book is present in the array', books)

/**
 * 4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */
let numbers =25;
let array =[12, 24, 35, 44, 55];
let team =['mina', 'raju', 'mahima']
console.log(Array.isArray(numbers));
console.log('this is not array', numbers);
console.log(Array.isArray(array));
console.log('this is an array', array);
console.log(Array.isArray(team));
console.log('this is an array', team);


/**
 * 5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
 */
let array1 =['chocklate', 'chips', 'juice'];
let array2 =['ring', 'shoes', 'bag', 'dress', 'lipstick'];
let array3 =array1.concat(array2);
console.log(array1, array2, array3);