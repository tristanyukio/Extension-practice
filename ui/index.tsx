import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  const [hello, setHello] = useState('Bye');

  function getHello() {
    fetch('/hello')
      .then(response => response.json())
      .then(data => setHello(data.Message))
      .catch(err => console.log('error in getHello: ' + err));
  }
  function getBye() {
    fetch('/bye')
      .then(response => response.json())
      .then(data => setHello(data.Message))
      .catch(err => console.log('error in getBye: ' + err));
  }

  return (
    <div>
      <h1>Does this update?</h1>
      <button onClick={getHello}>Click me!</button>
      <button onClick={getBye}>Or me!</button>
      <p>{hello}</p>
    </div>
  )
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);