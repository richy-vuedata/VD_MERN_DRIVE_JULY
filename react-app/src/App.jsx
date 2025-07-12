import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers.response.data())
    }, []);

return (
  <div>
    {users.map(user => (
      <div key={user.id}>
        {user.name}
      </div>
    ))}
  </div>
);

}
export default App;
