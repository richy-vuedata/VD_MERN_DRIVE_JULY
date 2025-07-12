import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState(null);

  console.log(users);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
      });
      const data = await res.json();
    
      if (res.status === 200) {
        setUsers(data);
      } else {
        console.log(res?.error);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUsers(); 
  }, []);

  return (
    <div>
      <table>
        <th>User Name</th>
        <th>Email</th>
        {
        users && users?.length === 0 ? <span>No users found</span> : users?.map((user) => (
          <tr>
           <td>{user.name}</td>
           <td>{user.email}</td>
          </tr>
        ))  
        }
      </table>
      
    </div>
  );
}

export default App;
