import React, { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="container">
        <button onClick={() => setVisible(!visible)}>
          Toggle hide and show
        </button>
        
        {visible && <h1>This is secret!!</h1>}
      </div>

    </>
  );
};

export default App;
