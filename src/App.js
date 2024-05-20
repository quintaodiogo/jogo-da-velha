import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Input from "./objects/Input";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input value="show" id="show" content="Mostrar eventos" type="checkbox"/>
    </main>
  );
}

export default App;
