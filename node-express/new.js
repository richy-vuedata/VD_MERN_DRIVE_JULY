// ### **Problem Statement**

// Create a simple API that supports:

// - GET /users → Return a list of users
// - POST /users → Add a new user
// - GET /users/:id → Get user details by ID
// - PUT /users/:id → Update a user’s data
// - DELETE /users/:id → Delete a user

import express from 'express';

const app = express();

app.get('/users', getuser);
app.post('/users', postUser);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);