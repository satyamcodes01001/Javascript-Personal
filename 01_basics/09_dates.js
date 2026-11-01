// let mydate=new Date
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


// let myCreatedDate=new Date(2007,7,12)
// console.log(myCreatedDate.toDateString());

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString(`default`,{
    weekday: 'long'
})