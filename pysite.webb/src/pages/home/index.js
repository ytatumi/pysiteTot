import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [newUser, setNewUser] = useState({ name: '' });

  const updateUsers = () => {
    fetch('http://127.0.0.1:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([newUser]),
    })
      .then((response) => {
        if (response.ok) {
          fetchData();
        } else {
          console.error('Error updating users');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const fetchData = () => {
    fetch('http://127.0.0.1:5000/api/users', {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching data');
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <p>{data ? JSON.stringify(data) : 'Loading...'}</p>
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <button onClick={updateUsers}>Add User</button>
      <header className="App-header">
        <p>This is the best 123</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
