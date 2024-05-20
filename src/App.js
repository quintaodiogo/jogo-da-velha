import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox value="show" id="show" content="Mostrar eventos" type="checkbox"/>
    </main>
  );
}

export default App;
