const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

const users = [
    {
        "id": 1,
        "userId": "user1",
        "firstName": "User1",
        "lastName": "Test1",
        "email": "usertest1@gmail.com"
    },
    {
        "id": 2,
        "userId": "user2",
        "firstName": "User2",
        "lastName": "Test2",
        "email": "usertest2@gmail.com"
    },
     {
        "id": 3,
        "userId": "user3",
        "firstName": "User3",
        "lastName": "Test3",
        "email": "usertest3@gmail.com"
    }
];

console.log({ users });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    console.log({ users });
    const data = JSON.stringify(users);
    return res.status(200).json({ users: data });
});

app.post('/user', (req, res) => {
    const userData = req.body;
    console.log({ body });
    const findUser = users?.find(({ id }) => id === userData?.id);
    if (findUser) {
        res.status(500).json({ message: "User already Exists" })
    } else {
        users = users.push(userData);
        res.status(200).json({ message: "user Added sucessfully" })
    }
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    console.log({ id });
    const findUser = users.find(({ id }) => id === id);
    if (findUser) {
        const result = users?.filter(({ id }) => id === id);
        return result;
    }
});

app.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const findUser = users?.find(({ id }) => id === id);
    if (findUser) {
        users.push({ id, ...userData });
        return users;
    }
});

app.delete('/user/:id', (req, res) => {
    const { id: reqId } = req.params;
    const findUser = users.find(({ id }) => id === reqId);
    if (findUser) {
        const result = users.delete(findUser);
        result(result);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})