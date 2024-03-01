// EXAMPLE 1 - Create an Array with N elements, same Value in JavaScript

const arr = Array(3).fill('a');

console.log(arr); // 👉️ ['a', 'a', 'a']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the Array.from() method instead

// const arr = Array.from({length: 3}).fill('a');

// console.log(arr); // 👉️ ['a', 'a', 'a']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Create an Array of N non-primitive elements with the same value

// const arr = Array.from({length: 3}, () => {
//   return {name: 'Bobby Hadz'};
// });

// // [
// //   { name: 'Bobby Hadz' },
// //   { name: 'Bobby Hadz' },
// //   { name: 'Bobby Hadz' }
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Creating a two-dimensional array with N elements, same value

// const arr = Array.from({length: 2}, () =>
//   Array.from({length: 3}, () => {
//     return {name: 'Bobby Hadz'};
//   }),
// );

// // [
// //   [
// //     { name: 'Bobby Hadz' },
// //     { name: 'Bobby Hadz' },
// //     { name: 'Bobby Hadz' }
// //   ],
// //   [
// //     { name: 'Bobby Hadz' },
// //     { name: 'Bobby Hadz' },
// //     { name: 'Bobby Hadz' }
// //   ]
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Repeating multiple values N times

// const arr = Array(3).fill(['a', 'b', 'c']).flat();

// // [
// //   'a', 'b', 'c',
// //   'a', 'b', 'c',
// //   'a', 'b', 'c'
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Create an Array with N elements, same Value using a `for` loop

// const arr = [];
// const total = 3;

// for (let i = 0; i < total; i++) {
//   arr.push('a');
// }

// console.log(arr); // 👉️ ['a', 'a', 'a']

// ------------------------------------------------------------------

// // EXAMPLE 7 - Create an Array with N elements, same Value using a `while` loop

// let total = 3;

// const arr = [];

// while (total--) {
//   arr.push('a');
// }

// console.log(arr); // 👉️ [ 'a', 'a', 'a' ]
