import React, { useState,useEffect } from 'react'

function App() {
  const [userData, SetUserData] = useState();
  const [userDataLoading, SetUserDataLoading] = useState(false);
  const getTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(getTheme ?? "light");

  const handleButtonClick = () => {
    const updateTheme = getTheme === "light" ? "Dark" : "light";
    setTheme(updateTheme);
    localStorage.setItem("theme", updateTheme);
  }

  console.log({ theme });

  useEffect(() => {
    fetchUserRecord();
  }, []);

  const fetchUserRecord = () => {
    SetUserDataLoading(true);
    try {
      fetch(`https://reqres.in/api/users?page=2 (alternatives: https://fakestoreapi.com/products, https://jsonplaceholder.typicode.com/users)`)
        .then((res) => {
          return res.json();
        })
        .then((resValue) => {
          console.log("resValue", resValue)
          SetUserData(resValue);
          console.log(`userRecords Fetched Succusfully`)
        })
    } catch (err) {
      console.log(`something went wrong while fetching userRecords`, err);

    } finally {
      SetUserDataLoading(false);
    }
  }
  console.log("userData", userData);
  return (
    <div>
      {
        userDataLoading ? `...loading` :
          <>
            <h1>
              User Records in Table Format
            </h1>
            <table>
              <th>
                user Records
              </th>
              <tr>
                Id
              </tr>
            </table>
          </>
      }
      <button onClick={handleButtonClick}>Switch Theme</button>
    </div>
  );
}

export default App;
