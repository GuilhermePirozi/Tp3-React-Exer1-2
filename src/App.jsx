import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Ex1</h1>
      <Card
        nome="Ferrari"
        descricao="Vendo uma la ferrari"
      />
      <Card
        nome="Bugatti"
        descricao="Vendo uma bugatti chiron"
      />
    </div>
  );
}

export default App;
