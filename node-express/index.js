const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/userList',(req,res)=>{
    let user_list = [{"name":"Eswar","age":12},{"name":"Ajith","age":10}];
  res.send({"status":true,"data":user_list});  
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})