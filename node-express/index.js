const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

// destructring sample
var users = {name:"visha",age:24}

let {name,age}=users

console.log("name",name);

console.log("age",age);

let users = {name:"visha",age:24}

// split and join example

var words = 'Jessie maticulation Higher Secondary School';
const splitted_words = words.split('')
console.log(splitted_words); 


var next_word = ['school1','school2','school3']
next_word.join('school3')

// remove duplicates from an array

var unique_elements = ['Name1','Name2','Name3','Name1','Name3']
unique_elements.array.forEach(element => {
    let element_placeholder = []
    element_placeholder.push(element)
   // if(element)
});


