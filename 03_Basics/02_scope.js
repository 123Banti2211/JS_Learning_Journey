////Global and local scope in javascript
//let a = 10
//const b = 20
//var c = 300
let a = 100000

if(true){
    let a = 10
    const b = 20
    //var c = 30
    d = 40
    //console.log("Inner: ",a);
}

//console.log(a)
//console.log(b)
//console.log(c);
//console.log(d);

function one()
{
    const username = "banti"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
//one()

if (true) {
    const username = "banti"
    if (username === "banti") {
        const website = "youtube"
        //console.log(username + website);
        
        
    }
    //console.log(website);
}

//console.log(username);

// +++++++++++++++++++++++++   interesting   +++++++++++++++++
//Scope level and mini hoisting in javascript 

console.log(addone(5));

function addone(num){
    return num+1
}

//console.log(addTwo(5));

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));