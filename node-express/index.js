const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.getUsers('/users', (res) => {
       res.send([{
        userName: 'Surya',
        userId: '01',
    },{
        userName: 'Deepak',
        userId: '02'
    }])
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})