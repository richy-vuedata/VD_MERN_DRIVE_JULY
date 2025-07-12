const express = require('express');
const app = express()
// const userService = require('./service')

// app.use('v1/user/', userRoutes)

app.get('/users', (req, res)=>{
    const array = [{name: 'Raja'},{name: 'prasanna'}]
    res.send(array)
} )

app.post('/users', (req, res)=>{
    let array = [{name: 'Raja'},{name: 'prasanna'}]
    array.push(req.body)
    res.send(array)
} )

app.get('/users:id', (req, res)=>{
    let array = [{id:1,name: 'Raja'},{id: 2,name: 'prasanna'}]
    const user = array.filter(user => user.id === req.query.id)
    res.send(user)
} )

app.put('/users:id', (req, res)=>{
    let array = [{id:1,name: 'Raja'},{id: 2,name: 'prasanna'}]
    const user = array.filter(user => user.id === req.query.id)
    user[0].name = req.body.name
        let Updateuser = array.filter(user => user.id !== req.query.id)
    Updateuser.push(user)
    res.send(Updateuser)
})

app.delete('/users:id', (req, res)=>{
    let array = [{id:1,name: 'Raja'},{id: 2,name: 'prasanna'}]
    const user = array.filter(user => user.id === req.query.id)
    if(user){
          let Updateuser = array.filter(user => user.id !== req.query.id)
          res.send(Updateuser)
    }else{
     res.send(user)
    }
})


app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})