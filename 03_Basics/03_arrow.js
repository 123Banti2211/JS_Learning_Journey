//THIS and arrow function in javascript

const user = {
    username:"banti",
    price:999,

    welcomeMessage: function()
    {
        console.log(`${this.username},Welcome to website`);
        //console.log(this);
        
        
    }
    
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

/*function chai()
{
    let username = "banti"
    //console.log(this);
    console.log(this.username);
    
    
}
chai()

const chai = function ()
{
    let username = "banti"
    //console.log(this);
    console.log(this.username);
    
    
}
chai()*/

const chai =  () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
}
chai()

//Basic arrow function/ explecit return
//const addTwo= (num1,num2)=>{
    //return num1+num2
//}

//IMplecet return
//const addTwo = (num1,num2) => num1+num2

//const addTwo = (num1,num2) => (num1+num2)

//object return
const addTwo = (num1,num2) => ({username:"banti"})

//const myArray = [2,5,3,7,8]
//myArray.forEach()

console.log(addTwo(3,4));

