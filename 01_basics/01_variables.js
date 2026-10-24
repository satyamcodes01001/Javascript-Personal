const accountId=101   // 'const' keyword se kuchh bhi changes nhi kr skte (Use jb kisi chiz ko change n krna ho)
let accountEmail="satyamseth123@gmail.com"
var accountPassword="25800"
accountCity="Banaras"
let accountStatus;    // By default it is assigned as "undefined" 



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