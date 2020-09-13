import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var nombre="luis alberto";
  var presentacion="hola soy "+nombre;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con reactjs 
        </p>
        {presentacion}
        {
          alert("hola mundo con react")
        }
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

export default App;
