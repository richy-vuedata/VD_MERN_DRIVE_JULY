const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());
let users = [
    {
        id: 1,
        name: "mubina",
        dept: "IT"
    },
     {
        id: 2,
        name: "mubina2",
        dept: "IT"
    }
];
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/users',(req,res)=>{
    const data = req.body
    users.push(data)
    return res.status(200).json({ message : "Data added"})
})

app.get('/getUsers',(req,res)=>{
    res.json(users)
    return res.status(200)
})
app.get('/getUsers/:id',(req,res)=>{
    const data = users.find(item => item.id === parseInt(req.params.id))
    res.json(data)
    return res.status(200)
})
app.delete('/deleteUsers/:id',(req,res)=>{
    const data = users.findIndex(item => item.id === parseInt(req.params.id))
    if(data !== -1){
    users.splice(data,1)
    res.status(201).end
    }else{
        res.status(400).json({ error: "Not found"})
    }
})
app.put('/updateUsers/:id',(req,res)=>{
    const data = users.findIndex(item => item.id === parseInt(req.params.id))
    if(data !== -1){
    users[data] = req.body
    res.status(201).json({ message: "user updated successfully"})
    }else{
        res.status(400).json({ error: "Not found"})
    }
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})