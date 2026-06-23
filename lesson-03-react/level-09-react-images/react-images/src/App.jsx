import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import germanSheperd from "./assets/german-sheperd.jpg";
import poodle from "./assets/poodle.jpg";
import labradorRetriever from "./assets/labrador-retriever.jpg";

function App() {
  return (
    <main>
      <h1>React Images</h1>
      <p>
        To add local imgaes in React we would first,
        place the images in our "asset" folder, then we would 
        import them into the file, next we give them a variable name
        and finally, we insert those variable names into the "source" 
        src={} image tag. 
      </p>
      <div id="dogImages">
        <figure>
          <img src={germanSheperd}/>
          <figcaption>Rocky - German Sheperd</figcaption>
        </figure>

        <figure>
          <img src={poodle}/>
          <figcaption>Fuflly - Poodle</figcaption>
        </figure>

        <figure>
          <img src={labradorRetriever}/>
          <figcaption>Midnight - Labrador Retriever</figcaption>
        </figure>
      </div>
    </main>
  );
}

export default App;
