const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())
// Create a simple API that supports:
// Use in-memory array to store users (no database needed)
const users = [{
    name: "ABC", 
    age:20,
}, {
    name: "Nirmala", 
    age:21,
}, {
    name: "Rajat", 
    age:22,
}]

// GET /users → Return a list of users
app.get('/users', (req, res) => {
    res.send(users);
})

// POST /users → Add a new user
app.post('/users', (req, res) => {
    let id = Object.keys(users).length 
    users[++id] = req.body
    res.send(`Added User: ${id}`);
})

// GET /users/:id → Get user details by ID
app.get('/users/:id', (req, res) => {
    const {id} = req.params
    if(Object.keys(users).length <= id) return res.send("User Not Found")
    res.send(users[id]);
})

// PUT /users/:id → Update a user’s data
app.put('/users/:id', (req, res) => {
    const {id} = req.params
    if(Object.keys(users).length <= id) return res.send("User Not Found")
    users[id - 1] = {...users[id - 1], ...req.body}
    res.send("Uodated User");
})

// DELETE /users/:id → Delete a user
app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    if(Object.keys(users).length <= id) return res.send("User Not Found")
    users.splice(id - 1, 1)    
    res.send("Deleted User");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})