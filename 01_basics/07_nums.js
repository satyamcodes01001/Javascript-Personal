

// 1. Number declaration
const score = 400;
console.log(score); // 400

// new Number() ek object banata hai; normally primitive number use karo
const balance = new Number(600);
console.log(balance); // [Number: 600]


// 2. toString() -> Number ko String mein convert karta hai
console.log(balance.toString());        // "600"
console.log(balance.toString().length); // 3


// 3. toFixed() -> Decimal places fix karta hai
const price = 99.456;
console.log(price.toFixed(2)); // "99.46"
console.log(price.toFixed(1)); // "99.5"
// Output String hota hai, Number nahi.


// 4. toPrecision() -> Total significant digits fix karta hai
const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // "23.9"
console.log(otherNumber.toPrecision(4)); // "23.90"


// 5. toLocaleString() -> Number ko readable format deta hai
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // "10,00,000"
console.log(hundreds.toLocaleString("en-US")); // "1,000,000"


// 6. toExponential() -> Scientific notation mein convert karta hai
const amount = 12345;
console.log(amount.toExponential());   // "1.2345e+4"
console.log(amount.toExponential(2));  // "1.23e+4"


// 7. Number() -> Value ko Number mein convert karta hai
console.log(Number("50"));    // 50
console.log(Number("12.5"));  // 12.5
console.log(Number("hello")); // NaN
console.log(Number(""));      // 0
console.log(Number(null));     // 0
console.log(Number(true));     // 1
console.log(Number(false));    // 0


// 8. parseInt() -> String se integer parse karta hai
console.log(parseInt("25.8"));   // 25
console.log(parseInt("25px"));   // 25
console.log(parseInt("hello"));  // NaN


// 9. parseFloat() -> String se decimal number parse karta hai
console.log(parseFloat("25.8px")); // 25.8
console.log(parseFloat("12.5"));   // 12.5
console.log(parseFloat("hello"));  // NaN


// 10. Number.isInteger() -> Integer hai ya nahi
console.log(Number.isInteger(25));   // true
console.log(Number.isInteger(25.5)); // false


// 11. Number.isFinite() -> Finite number hai ya nahi
console.log(Number.isFinite(100));      // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));      // false


// 12. Number.isNaN() -> Value actual NaN hai ya nahi
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("hello")); // false


// 13. Number.isSafeInteger() -> Integer safely represent ho sakta hai?
console.log(Number.isSafeInteger(100)); // true
console.log(Number.isSafeInteger(1.5)); // false


// 14. Number constants -> Number ki predefined limits
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE);        // Largest finite number
console.log(Number.MIN_VALUE);        // Smallest positive number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);               // NaN
console.log(Number.EPSILON);           // 1 ke paas precision ka gap
