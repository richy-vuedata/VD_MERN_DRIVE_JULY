const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');

function filterDuplicateElemenets(arr){
    let filteredElementsSet = new Set(arr);
    let filteredElements = []
    for(data of filteredElementsSet){
        filteredElements.push(data);
    }
    return filteredElements;
}
let result = filterDuplicateElemenets([10,20,10,20]);
console.log(result);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// https://fakestoreapi.com/products
// Then filter the records based on price which is greater than 25 and rate greater than 3
 
// Sample API response : 
// {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
app.get('/getProducts', async (req, res) => {
    try {
        let response =  await axios.get('https://fakestoreapi.com/products');
        let productDetails = response.data;
        let filteredData = [];
        for (data of productDetails){
            if(data.price > 25 && data.rating.rate > 3){
                filteredData.push(data);
            }
        }
        if(filteredData.length === 0){
            return res.send({
                message : 'No Products found in the given criteria'
            });
        }
        console.log('Response :', filteredData)
        return res.send({
            data : filteredData
        });
    } catch(error){
        console.log(`error: ${error}`);
        return res.send({
            message : 'error'
        });
    }
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})