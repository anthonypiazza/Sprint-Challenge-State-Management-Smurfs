import React from "react";
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <AddSmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
