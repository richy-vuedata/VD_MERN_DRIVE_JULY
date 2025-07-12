const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const arr = [2,4,6,8];

function solution () {
    every(arr) 
    {
        console.log(arr);
    }
}
// Print numbers from 1 to 20. If divisible by:
 
// 3 → print "Fizz"
// 5 → print "Buzz"
// Both → print "FizzBuzz"

function problem2(){
    for(let i=1;i<=20;i++){
        if((i % 3 == 0) && (i % 5 == 0)){
             console.log("FizzBuzz, The number is divisible by ", i );
        }
        else if(i % 3 == 0){
            console.log("Fizz , The number is devisible  ",i);
        }
        else if(i % 5 == 0){
            console.log("Buzz, the number is divisible  ", i);
        }
       
        else{
            console.log(i);
        }

    }
}
// Write a function that uses Promise.all to call both APIs in parallel and return a combined result once both responses are received
// https://fakestoreapi.com/users
// https://fakestoreapi.com/products

async function result(req, res){
    // const url1 = https://fakestoreapi.com/users;
    // const url2 = https://fakestoreapi.com/products;

    const result = fetch("https://fakestoreapi.com/users")
    .then(response => response.json())
  .then((data) =>{
    console.log(data);
  } );

    // const result2 = await fetch("https://fakestoreapi.com/products")

    res.json({succes:true
    });
}
 
app.get("/combined-both-api-result", result);





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    problem2();
})