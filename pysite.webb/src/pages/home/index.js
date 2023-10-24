import React, {useState, useEffect} from 'react';

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')  // This is the Flask API endpoint
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  
  return (
    <div className="App">
      <h1>React App</h1>
      <p>{data ? data.message : 'Loading...'}</p>
      <header className="App-header">
        <p>
          This is the best 123
        </p>
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
}

export default Home;
