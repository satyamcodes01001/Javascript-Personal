
// ==========================================
// 1. TEMPLATE LITERALS
// ==========================================

const name = "Satyam";
const repoCount = 60;

// OLD METHOD: + se strings aur variables ko jodna
console.log(name + " has " + repoCount + " repositories.");

// MODERN METHOD: Backticks (` `) aur ${} use karte hain
console.log(`My name is ${name} and my repo count is ${repoCount}`);

// ${} ke andar expressions aur methods bhi use kar sakte hain
console.log(`Next year my repos will be ${repoCount + 10}`);
console.log(`Uppercase name: ${name.toUpperCase()}`);

// IMPORTANT: JavaScript mein upper() nahi, toUpperCase() hota hai.


// ==========================================
// 2. STRING CREATION, LENGTH & INDEXING
// ==========================================

const gameName = "Venom-ss-gamer";

// String constructor bhi available hai, lekin normally avoid karo
const anotherGame = new String("Venom");

console.log(typeof gameName);     // string
console.log(typeof anotherGame);  // object

// String ki length (property hai, method nahi)
console.log(gameName.length);  // 14

// Indexing 0 se start hoti hai
console.log(gameName[0]);        // V
console.log(gameName.charAt(2)); // n

// at() negative indexing bhi support karta hai
console.log(gameName.at(-1));    // r
console.log(gameName.at(-2));    // e

// Invalid index par [] aur at() undefined return karte hain,
// jabki charAt() empty string ("") return karta hai.


// ==========================================
// 3. CASE CONVERSION
// ==========================================

console.log(gameName.toUpperCase()); // VENOM-SS-GAMER
console.log(gameName.toLowerCase()); // venom-ss-gamer

// IMPORTANT: Strings immutable hoti hain.
// Methods original string ko modify nahi karte,
// generally ek nayi string return karte hain.

console.log(gameName); // Venom-ss-gamer


// ==========================================
// 4. SEARCHING IN STRINGS
// ==========================================

// indexOf() -> first matching text ka index
console.log(gameName.indexOf("m"));  // 4

// lastIndexOf() -> last matching text ka index
console.log(gameName.lastIndexOf("m")); // 12

// Text nahi mila toh indexOf() -1 return karta hai
console.log(gameName.indexOf("xyz")); // -1

// includes() -> text present hai ya nahi
console.log(gameName.includes("gamer"));  // true
console.log(gameName.includes("spider")); // false

// startsWith() aur endsWith()
console.log(gameName.startsWith("Venom")); // true
console.log(gameName.endsWith("gamer"));   // true

// IMPORTANT: String searching case-sensitive hoti hai.
console.log(gameName.includes("Venom")); // true
console.log(gameName.includes("venom")); // false


// ==========================================
// 5. slice() vs substring()
// ==========================================

// Syntax: string.slice(start, end)
// End index include nahi hota.

console.log(gameName.slice(0, 5));  // Venom
console.log(gameName.slice(6, 8));  // ss

// slice() negative indices support karta hai
console.log(gameName.slice(-5));    // gamer
console.log(gameName.slice(-5, -1)); // game

// Start index end se aage ho toh empty string mil sakti hai
console.log(gameName.slice(-1, 2)); // ""

// substring() negative values ko 0 treat karta hai
console.log(gameName.substring(-5, 5)); // Venom

// substring() mein start > end ho toh indices swap ho jaate hain
console.log(gameName.substring(5, 0)); // Venom

// RULE:
// Negative indexing ke liye slice() convenient hai.
// Dono methods mein end index exclude hota hai.


// ==========================================
// 6. replace() & replaceAll()
// ==========================================

const url = "https://satyam.com/satyam%20seth";

// replace() -> string search mein first match replace karta hai
console.log(url.replace("%20", "-"));
// https://satyam.com/satyam-seth

const text = "apple apple apple";

// replaceAll() -> saare matching occurrences replace karta hai
console.log(text.replaceAll("apple", "mango"));
// mango mango mango

// IMPORTANT: Original string change nahi hoti.
console.log(text); // apple apple apple


// ==========================================
// 7. trim() & WHITESPACE
// ==========================================

const userName = "    Satyam Seth    ";

console.log(userName.trim());      // "Satyam Seth"
console.log(userName.trimStart()); // "Satyam Seth    "
console.log(userName.trimEnd());   // "    Satyam Seth"

// trim() starting aur ending ki whitespace remove karta hai.
// Beech ki spaces remove nahi karta.

console.log("  Hello World  ".trim()); // "Hello World"


// ==========================================
// 8. split() -> STRING TO ARRAY
// ==========================================

const game = "Venom-ss-gamer";

// '-' separator ke basis par string ko todta hai
console.log(game.split("-"));
// ["Venom", "ss", "gamer"]

const sentence = "I love JavaScript";

console.log(sentence.split(" "));
// ["I", "love", "JavaScript"]

// Har character ko array element banana
console.log("Hello".split(""));
// ["H", "e", "l", "l", "o"]

// Empty separator ("") string ko UTF-16 code units ke basis par
// todta hai; har Unicode character ke liye yeh perfect nahi hai.

// Separator na dene par poori string ek element banti hai
console.log("Hello World".split());
// ["Hello World"]


// ==========================================
// 9. concat() -> STRINGS JODNA
// ==========================================

const firstName = "Satyam";
const lastName = "Seth";

console.log(firstName.concat(" ", lastName));
// Satyam Seth

// + operator aur template literals bhi use kar sakte ho.
// Generally template literals readable hote hain.
console.log(`${firstName} ${lastName}`);


// ==========================================
// 10. repeat() & padStart() / padEnd()
// ==========================================

// repeat() -> string ko given number of times repeat karta hai
console.log("Hi ".repeat(3)); // Hi Hi Hi

// padStart() -> starting mein characters add karta hai
console.log("5".padStart(3, "0")); // 005

// padEnd() -> ending mein characters add karta hai
console.log("5".padEnd(3, "0")); // 500

// Padding tab tak hoti hai jab tak required length na aa jaye.
// Existing string ki length target se zyada ho toh padding nahi hoti.


// ==========================================
// 11. STRING COMPARISON & IMMUTABILITY
// ==========================================

console.log("hello" === "hello"); // true
console.log("hello" === "Hello"); // false

// String methods original string ko mutate nahi karte.
let language = "javascript";

language.toUpperCase();

console.log(language); // javascript

// Result save karoge tabhi variable mein updated value aayegi.
language = language.toUpperCase();

console.log(language); // JAVASCRIPT


// ==========================================
// 12. EXTRA: startsWith() WITH POSITION
// ==========================================

const message = "Hello JavaScript";

// Third index se search karna start karo
console.log(message.startsWith("lo", 3)); // false

// Index 3 par "l" hai, isliye "lo" match nahi hota.
// Position 3 ka matlab index 3 se check karna hai.
console.log(message.startsWith("lo", 3)); // false

// Index 3 se "lo" nahi, "lo" ka start index 3 nahi hai.
// Correct example:
console.log(message.startsWith("lo", 3)); // false
console.log(message.startsWith("lo", 3 + 1)); // true
