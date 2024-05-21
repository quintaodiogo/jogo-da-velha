import React from "react";
import "./App.css";
import Profile from "./img/profile.png";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AvatarProfile from "./objects/AvatarProfile";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox value="show" id="show" content="Mostrar eventos" type="checkbox"/>
      <About>
        <HeaderInternal />
        <AvatarProfile src={Profile} alt="Avatar do Diogo"/>
      </About>
    </main>
  );
}

export default App;
