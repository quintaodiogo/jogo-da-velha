import React, { useState } from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

function App() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log(isActive);
  return (
    <main className="app">
      <Header onClick={onClick} />
      <Hashtag />
      <Checkbox
        value="show"
        id="show"
        content="Mostrar eventos"
        type="checkbox"
      />
      <About isActive={isActive}>
        <HeaderInternal onClick={onClick} />
        <ProfileUser />
      </About>
    </main>
  );
}

export default App;
