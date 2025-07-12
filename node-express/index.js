const express = require('express');
const app = express();
const port = 3000;


let users=[{user_id:1,user_name:"nassaar"},{user_id:2,user_name:"mohamed"},{user_id:3,user_name:"manoj"},{user_id:4,user_name:"adnan"}]

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/users', (req, res) => {
    res.send({data:users});
})
app.post('/users', (req, res) => {
  let userDetails=req.body
  users.push(userDetails)
    res.send({msg:"success"});
})
app.put('/users', (req, res) => {
  let user_name=req.body.user_name
  users.push(userDetails)
    res.send({msg:"updated"});
})
app.delete('/users/:id', (req, res) => {
  let user_id=req.params.id
  users.filter(data=>data.user_id===user_id)
    res.send({msg:"deleted"});
})
app.get('/users/:id', (req, res) => {
  let user_id=req.params.id
 let data= users.filter(data=>data.user_id===user_id)
    res.send({data:data});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})