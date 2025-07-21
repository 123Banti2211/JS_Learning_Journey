// Singletone
//Object.create
//Objects in depth in javascript
// Object literals

const mySym = Symbol ("Key1")

const JsUser = {
    name : "Banti",
    "full name" : "Banti Joarder",
    [mySym] : "myKey1",
    age : 18,
    location:  "jaipur",
    email : "banti@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
/*console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log( JsUser[mySym]);*/

JsUser.email = "banti@google.com"
//Object.freeze(JsUser)
JsUser.email = "banti@g2.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user", ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

