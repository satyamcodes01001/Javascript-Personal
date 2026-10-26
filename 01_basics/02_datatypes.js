"use strict"   // treat all JS code as new JS version

// alert(3+3)  // we are using node.js, not browser 
console.log("Satyam")

let name="Satyam"
let age=18
let isLoggedIn=false


// #PRIMITIVE DATATYPES:
// number
// bigint
// string => " "
// boolean => true/false
// null => standalone value (representation of empty value)
// undefined => value is not defined 
// symbol => for uniqueness

// Reference (Non-Primitive)
// Array, Object, Functions

console.log(typeof "Satyam");
console.log(typeof age);
console.log(typeof null);   // O/P: object
console.log(typeof undefined);  // O/P: undefined


// 1. JavaScript mein 7 primitive types hain:
// String, Number, Boolean, Undefined, Null, BigInt, Symbol.

// 2. typeof null ka output "object" aata hai.
//    Ye JavaScript ka historical behaviour hai.

// 3. typeof undefined ka output "undefined" aata hai.

// 4. typeof [] ka output "object" aata hai.
//    Array check karne ke liye Array.isArray() use kar sakte hain.

// 5. Symbol("id") har baar ek unique Symbol banata hai.

// 6. BigInt ke number ke end mein n lagate hain.

// 7. JavaScript dynamically typed language hai.
//    Variable ki value aur type change ho sakti hai.
