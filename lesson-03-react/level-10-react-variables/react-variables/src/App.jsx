import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const message1 = "To create React Variables, we would declare a variable with 'let' or 'const' key word, then we would do this before the return inside the function, next we can also declare global varaiables which would be outside of the function.";
  const message2= "To use React Variables, we simply insert them into our HTML and wrapped inside the {} curly bracket/brace to display our variable.";
  return (
    <main>
      <h1>React Variables</h1>
      <p>{message1}</p>

      <p>{message2}</p>
    </main>
  );
}

export default App;
