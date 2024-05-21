import React from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import Sobre from "./objects/Sobre";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox value="show" id="show" content="Mostrar eventos" type="checkbox"/>
      <About>
        <Sobre />
      </About>
    </main>
  );
}

export default App;
