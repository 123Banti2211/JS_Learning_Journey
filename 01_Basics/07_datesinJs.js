//Date and time in depth in javascript

//Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

let myCreatDate = new Date(2023,0,23)
//console.log(myCreatDate.toDateString());

let myCreatDate1 = new Date(2023,0,23,5,3)
//console.log(myCreatDate1.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatDate.getTime());
//console.log(Math.floor(Date.now()/1000));   //convert milisecond to second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})