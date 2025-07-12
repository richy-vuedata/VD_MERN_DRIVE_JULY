const express = require('express');
const app = express();
const port = 5000;
const axios = require("axios");

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// models.users.aggregate([
//     {
//         $match: {
//             isActive: true
//         }
//     },
//     {
//         $lookup: {
//             from: "address",
//             localField: "_id",
//             foreignField: "userId",
//             as: "address"
//         }
//     },
//     {
//         $unwind: {
//             path: "address"
//         }
//     },{
//         $match: {
//             "address.isActive": true
//         }
//     },
//     {
//         $groupBy: {
//             _id: "$_id",
//             data: {
//                 $push: {
//                     name: "$name",
//                     age: "$age",
//                     address: "$address"
//                 }
//             }
//         }
//     }

// ])

// Write a function that uses Promise.all to call both APIs in parallel and return a combined result once both responses are received
// https://fakestoreapi.com/users
// https://fakestoreapi.com/products

const axiosCall = async (endpoint) => {
    const res = await axios({
        url: endpoint,
        method: "GET"
    })
    console.log(res, "Axios Res");

    return res.data;
}

const handlePromise = async (req, res, next) => {
    try {
        const [call1, call2] = await Promise.all([
            axiosCall("https://fakestoreapi.com/users"),
            axiosCall("https://fakestoreapi.com/products")
        ]);

        console.log(call1, call2, "Promise");

        return res.status(200).json({
            data: {
                ...call1,
                ...call2
            }
        })
    } catch (err) {
        console.log(err, "ERROR");
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const arr = [1, 2, 19, 39, 32];

const someRes = arr.some(item => item > 30);
const everyRes = arr.every(item => item > 30);

console.log(someRes, "Returns True");
console.log(everyRes, "returns false");

app.get('/list', (req, res, next) => {
    return handlePromise(req, res, next);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})