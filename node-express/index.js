const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const getAllUsers = (req, res) => {
    const { name } = req.query;

    if (!name) {
        res.status(400).json({ message: "name is required" });
        return;
    }
    
    const regex = new RegExp(name, 'i').test(name);

    if (!regex) {
        res.status(404).json({ message: "user not found" });
        return;
    }

    const users = [
       {
        name: "subash",
        email: "suabsh@gmail.com"
       },
       {
        name: "vignesh",
        email: "suabsh@gmail.com"
       }
    ];

    const filteredUsers = users.filter(user => user.name.toLowerCase() === name.toLowerCase());

    return res.status(200).json({ message: "success", filteredUsers});
 
}

app.get('/users', getAllUsers);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})