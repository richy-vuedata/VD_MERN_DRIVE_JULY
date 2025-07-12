import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => setData(response.json))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {data ? data.map((index, detail) => {
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </thead>
          <tbody>
            <tr key={index}>
              <td>{detail.name}</td>
              <td>{detail.email}</td>
              <td>{detail.address.city}</td>
            </tr>
          </tbody>
        </table>
      }) : <p>Data is Loading</p>}
    </div>
  );
}

export default App;
