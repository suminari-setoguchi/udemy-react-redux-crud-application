import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label className="" htmlFor="bar">
        bar
      </label>
      <input
        type="text"
        onChange={
          () => {console.log("I'm clicked!")}
        }
      />
    </React.Fragment>
  );
}

export default App;
