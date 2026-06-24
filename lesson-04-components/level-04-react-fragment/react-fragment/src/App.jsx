import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>React Fragment</h1>
      </header>
      <main>
        <p>
          React Fragment a feature that allows you t group a list of multiple
          elements without adding extra HTML Nodes to the DOM - Which is like
          your whole webpage. an example of "<></>" fragments which are empty
          tags.
        </p>
      </main>
      <footer>
        @2026 Copyright Created by pearla mutombo - level 03.
      </footer>
    </>
  );
}

export default App;
