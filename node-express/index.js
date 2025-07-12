const express = require('express');
const app = express();
const port = 3000;
const express_limiter=require('express-rate-limiter')

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/',(req,res,next)=>{
    // if(){

    // }else {
    //     res.status()
    // }
})
let   userDetails=[
    {
        "name": "Nassar",
        "id": "3"
    },
    {
        "name": "Mohamed",
        "id": "3"
    },
    {
        "name": "Siva",
        "id": "1"
    },
    {
        "name": "Siva",
        "id": "1"
    },
    {
        "name": "Jas",
        "id": "2"
    },
        {
        "name": "Nassar",
        "id": "3"
    }
]

let fn=[]
    userDetails.forEach(data=>{
fn.push(data.id)
    })
    let fnSet=new Set(fn)
    fnSet=Array([...fnSet])
    console.log(fnSet)
    let fn_arr=[]
    fnSet.forEach((data,i)=>{
fn_arr.push({id:data,name:userDetails[i][data]})
    })
    console.log(fn_arr)

app.post("/users",async(req,res)=>{
    let userDetails=req.body ////user_name,user_id
let fn=[]
    userDetails.forEach(data=>{
fn.push(data.id)
    })
    let fnSet=new Set(fn)
    fnSet=Array([...fnSet])
    let fn_arr=[]
    fnSet.forEach((data,i)=>{
fn_arr.push({id:data,name:userDetails[i][data]})
    })

})
let arr=
[{
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
 
 let ss=arr.map(data=>{
    // let obj={
    //     id:data.id,
    //     title:data.title,
    //     price:data.price,
    //     rate:data.rating.rate
    // }
    // fArr.push(obj)
   data.rate= data.rating.rate
   delete data.rating
   delete data.image
 })
 
//  let str="s_d_n"
//  console.log(str.split("_").join(""))

console.log("select first_name,last_name,email_address from employees inner join departments on departments.department_id=employees.department_id where employees.department_id=1 order by last_name asc")
console.log("select product_id,product_name,price from products where employee_id between '$10' and '$50' order by price desc")


function anagrams(str1,str2){
    str1=str1.split("").sort().join("")
    str2=str2.split("").sort().join("")
    if(str1==str2){
        return true
    }
    return false
}
console.log(anagrams('hello','world'))

 console.log(arr)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})