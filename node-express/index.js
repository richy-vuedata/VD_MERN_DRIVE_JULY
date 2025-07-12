const express = require('express');
const app = express();
const port = 3000;

const users = {
    1 : {
        name: 'john',
        age: 12
    },
    2: {
        name : 'adam',
        age: 34
    }
}

app.use(express.json())

app.get('/users', (req, res) => {
    res.status(200).json(users);
})

app.post('/users', (req, res) => {
    if (!req.body) {
        res.status(401).json({"message": "User details required"})
    }

    let ids = Object.keys(users).length;
    users[++ids] = req.body;

    res.status(201).json({status: true})
})

app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    users[id] = req.body;

    res.status(200).json({ status: true})
})

app.delete('/users/:id', (req, res) => {
    let  id = req.params.id;
    delete users[id];
        res.status(200).json({ status: true})

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}) 