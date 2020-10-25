import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React coba 1adad
          add

        </a>
        <p>slamat datang</p>
        <p>slamat datang</p>
        <p>slamat datang</p>
        <p>slamat datang</p>
      </header>
      <h1>Todo</h1>
      <Form />
    </div>
  );
}

