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
      <Header title="React Props" />
      <Main message="To use Props - short for Property are passed into react components like HTML attributes. That allowed data to flow downstream from parent components to child components. Making components reusable. basically we make generic components that we can pass into different properties which would make them versatile. you code it once and you can reuse it multiple times throughout your project." />
      <Footer year="2026 Copyright" />
    </>
  );
}

export default App;
