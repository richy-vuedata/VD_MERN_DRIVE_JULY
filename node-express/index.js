const express = require('express');
const app = express();
const port = 3000;
const usersData = require("./usersData")
// const usersData = ... data
app.get('/', (req, res) => {
    const {skip, limits} = req.query // coming from params of the request

    // removing the values using splice from usersData    
    // trying to consoling the first 20 users in usersData
    const firstValues = usersData.slice(skip, limits)
    console.log(firstValues)
    res.send(firstValues);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}  `);
})