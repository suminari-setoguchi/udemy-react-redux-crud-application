import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label className="" htmlFor="bar">
//         bar
//       </label>
//       <input
//         type="text"
//         onChange={
//           () => {console.log("I'm clicked!")}
//         }
//       />
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div className="">
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return (
    <div>
      Meow!
    </div>
  )
}

export default App;
