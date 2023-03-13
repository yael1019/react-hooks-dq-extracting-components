import React from "react";
import { messages, contacts } from "../data";
import Nav from './Nav';
import Messages from './Messages';
import Form from './Form';

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Messages />
        <Form />
      </main>
    </div>
  );
}

export default App;
