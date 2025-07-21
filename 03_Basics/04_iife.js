//Immediately Invoked Function Expressions(IIFE)

(function chai()
{
    //console.log(`DB CONNECTED`);    
}());
//chai()
(function aurcode()
{
    //console.log(`DB CONNECTED1`);    
}());

(() => {
    //console.log(`DB CONNECTED 2`);
} )();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('banti')
