import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header title="Destructured" />
      <Main message="To destructure props in React, replace the 'props' parameter in the component function definition with curly braces containing the specific property names." />
      <Footer copyright="@ 2026 Copyright CodeX Academy" />
    </>
  );
}

export default App;
