// for in loop used for object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


//in array for in loop gets the key index
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);
    //console.log(programming[key]);
}

//map is not iterateable in for in loop
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }