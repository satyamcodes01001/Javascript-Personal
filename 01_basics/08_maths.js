
// ==========================================
// 1. MATH OBJECT
// ==========================================

console.log(Math); // Math object ke available properties aur methods


// ==========================================
// 2. BASIC MATH METHODS
// ==========================================

console.log(Math.abs(-9));       // 9 -> Negative ko positive magnitude deta hai
console.log(Math.abs(9));        // 9
console.log(Math.sign(-9));      // -1 -> Negative number
console.log(Math.sign(0));       // 0
console.log(Math.sign(9));       // 1 -> Positive number


// ==========================================
// 3. ROUNDING METHODS
// ==========================================

console.log(Math.round(4.3));    // 4 -> Nearest integer
console.log(Math.round(4.6));    // 5

console.log(Math.ceil(4.2));     // 5 -> Upar ki taraf integer
console.log(Math.floor(4.6));    // 4 -> Neeche ki taraf integer

console.log(Math.trunc(4.9));    // 4 -> Decimal part remove
console.log(Math.trunc(-4.9));   // -4

// Negative numbers mein floor aur trunc alag hain
console.log(Math.floor(-4.9));   // -5
console.log(Math.trunc(-4.9));   // -4


// ==========================================
// 4. MAXIMUM AND MINIMUM
// ==========================================

console.log(Math.min(4, 3, 6, 8)); // 3 -> Smallest value
console.log(Math.max(4, 3, 6, 8)); // 8 -> Largest value

// Array ke saath spread operator (...)
const numbers = [10, 40, 20, 80];

console.log(Math.max(...numbers)); // 80
console.log(Math.min(...numbers)); // 10


// ==========================================
// 5. POWER AND ROOT METHODS
// ==========================================

console.log(Math.pow(2, 3));  // 8 -> 2 ki power 3
console.log(2 ** 3);          // 8 -> Power ka modern operator

console.log(Math.sqrt(25));   // 5 -> Square root
console.log(Math.sqrt(81));   // 9

console.log(Math.cbrt(27));   // 3 -> Cube root
console.log(Math.cbrt(-8));   // -2


// ==========================================
// 6. RANDOM NUMBERS
// ==========================================

console.log(Math.random());       // 0 se 1 se chhota random decimal
console.log(Math.random() * 10);  // 0 se 10 se chhota random decimal

// 1 se 10 tak random integer
console.log(Math.floor(Math.random() * 10) + 1);

// 0 se 9 tak random integer
console.log(Math.floor(Math.random() * 10));


// ==========================================
// 7. RANDOM INTEGER IN A GIVEN RANGE
// ==========================================

const min = 10;
const max = 20;

// min aur max dono include honge
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min


// ==========================================
// 8. REMAINDER / EVEN-ODD CHECK
// ==========================================

console.log(10 % 3); // 1 -> Remainder

const num = 17;

console.log(num % 2 === 0); // false -> Even nahi hai
console.log(num % 2 !== 0); // true -> Odd hai


// ==========================================
// 9. USEFUL MATH CONSTANTS
// ==========================================

console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // Euler's number

console.log(Math.SQRT2);  // 2 ka square root
console.log(Math.SQRT1_2); // 1/2 ka square root
console.log(Math.LN2);    // Natural log of 2
console.log(Math.LN10);   // Natural log of 10


// ==========================================
// 10. LOGARITHMIC METHODS
// ==========================================

console.log(Math.log(Math.E)); // 1 -> Natural logarithm
console.log(Math.log10(100));  // 2 -> Base 10 logarithm
console.log(Math.log2(8));     // 3 -> Base 2 logarithm


// ==========================================
// 11. TRIGONOMETRY METHODS
// ==========================================

// IMPORTANT: Angles radians mein dene hote hain
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(0));           // 0

// Degrees ko radians mein convert karna
const degrees = 180;
const radians = degrees * (Math.PI / 180);

console.log(radians); // PI


// ==========================================
// 12. FLOATING-POINT PRECISION
// ==========================================

console.log(0.1 + 0.2); // 0.30000000000000004

// Decimal calculations mein floating-point precision ka issue
console.log((0.1 + 0.2) === 0.3); // false

// Approximate comparison
console.log(Math.abs((0.1 + 0.2) - 0.3) < 1e-10); // true


// ==========================================
// 13. CLAMPING A NUMBER (PRACTICAL)
// ==========================================

// Number ko 0 se 100 ke beech rakhna
const score = 120;
const limitedScore = Math.min(100, Math.max(0, score));

console.log(limitedScore); // 100
