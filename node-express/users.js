const express = require('express');
const router = express.Router()

let users = [
 
{ id: 1, name: 'Alice' },
 
{ id: 2, name: 'Bob' }
 
];

router.get('/', async(req, res) => {
    try{
        const getUsers = users
        res.send({'message': 'List of users', 'data': getUsers})
        // res.status(200).send({'message': 'List of users', 'data': getUsers})
    }catch(err){
        console.log(err)
        res.status(500).send({'message':'Failed to get users'})
    }

})
router.post('/', async(req, res) => {
    try{
        const newUser = {}
        const payload = req.body.data
        newUser[id] = payload.id;
        newUser[name] = payload.name
        const addnewuser = users.push(newUser)
        res.status(200).send({'message': 'User added'})
    }catch(err){
        console.log(err)
        res.status(500).send({'message':'Failed to get users'})
    }

})