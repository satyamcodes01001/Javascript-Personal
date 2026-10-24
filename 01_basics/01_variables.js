const accountId=101   // 'const' keyword se kuchh bhi changes nhi kr skte (Use jb kisi chiz ko change n krna ho)
let accountEmail="satyamseth123@gmail.com"
var accountPassword="25800"
accountCity="Banaras"
let accountStatus;    // By default it is "undefined" (value assigned nhi hui!!) 



// accountId=2  (not allowed!!)  [constant declaration]
accountEmail="gv@fg.com"
accountPassword="1561"
accountCity="Kashi"


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus])

/* 
Prefer not use 'var' keyword
bcz of its issue in block and functional Scope
*/


/*
IMPORTANT POINTS:

1. const -> Variable ko reassign nahi kar sakte.
2. let -> Variable ki value change kar sakte hain.
3. var -> Purana tareeka hai; scope issues ki wajah se avoid karte hain.
4. undefined -> Variable declare hai, lekin value assign nahi hui.
5. Declaration -> Variable banana, jaise: let age;
6. Initialization -> Variable banate waqt value dena, jaise: let age = 18;
7. Reassignment -> Existing variable ko nayi value dena.
8. Scope -> Decide karta hai ki variable kahan accessible hoga.
9. let aur const -> Block-scoped hote hain.
10. var -> Function-scoped hota hai, block-scoped nahi.
11. console.log() -> Output print karta hai.
12. console.table() -> Output ko table format mein dikhata hai.
13. Best practice -> Default const use karo; value change karni ho toh let.
14. const object/array ke andar ki values ko change karne se nahi rokta.
15. Bina let, const ya var ke variable banana avoid karo.
*/