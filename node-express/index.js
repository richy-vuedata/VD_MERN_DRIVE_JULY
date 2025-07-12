const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

//
// USE dbSchemaname;
// DROP table `user`; 

// SELECT user.userId, user.userName, user.mobile, up.userProfileImg from user JOIN userProfile AS up ON user.userId = up.userId;

// DROP COLUMN `userName` FROM TABLE `user`;

// const dataSrtuctur = {
//     name:"sathya",
//     age: "20",
//     phone: "123456",
//     details:[
//         profile:"some image"
//     ]
// }

// const details = dataSrtuctur.{name, age, phone};
// let profileDetail = dataSrtuctur.details;

const arr = [1,2,3,1,2,3,1,4];
// removeRepeated(arr);
// function removeRepeated(arr){
//     let value = arr.reduce((acc,row)=>{
//         if(!(value).has(row){
//             value.push(row)
//         })
//     },arr[0]);
// }


const arr2 = [{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "rating": {
    "rate": 3.9,
    "count": 120
  }
},
{
  "id": 2,
  "title": "Mens Casual Premium Slim Fit T-Shirts ",
  "price": 22.3,
  "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "rating": {
    "rate": 4.1,
    "count": 259
  }
},
{
  "id": 3,
  "title": "Mens Cotton Jacket",
  "price": 55.99,
  "rating": {
    "rate": 4.7,
    "count": 500
  }
},
{
  "id": 4,
  "title": "Mens Casual Slim Fit",
  "price": 15.99,
  "rating": {
    "rate": 2.1,
    "count": 430
  }
}]

let retReqKey = arr2.map((row)=>{
    return {
        id : row.id,
        title:row.title,
        rate:row.rating.rate,
        price:row.price
    }
});

console.log(retReqKey)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})