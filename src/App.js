// import { Component } from "react";
// import { Heart } from "./Heart";

// class App extends Component{
//   render() {
//     return(
//       <Heart />
//     )
//   }
// }

// export default App;

// import { Component } from 'react';
// import './App.css';
// import { Updated } from './Updated';

// class App extends Component {
//   render() {
//   return(
//     <Updated/>
//   )}
// }

// export default App;

import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">

      <h1 className="container">To buy:</h1>

      <GroceryList />

      <div className="container">
        <img src='https://free-images.com/md/ee88/shopping_woman_with_colored.jpg' alt="bag" height="200px" />
      </div>
    </div>
  );
}

export default App;
