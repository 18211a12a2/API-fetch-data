import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await response.json();
    setData(result);
  };

  return (
    <>
      <div className="container">
        <h1>Website Link:</h1>
        <span>https://official-joke-api.appspot.com/random_joke</span>

        <button onClick={fetchData}>fetch data from link</button>

        {data && (
          <div className="result">
            <h6>ID: {data.id}</h6>
            <p>Setup: {data.setup}</p>
            <p>Punchline: {data.punchline}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
