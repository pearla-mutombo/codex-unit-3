import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <main>
      <h1>React Page</h1>
      <p>
        <strong>Dog Types: </strong>
        These are three popular types of dogs that is most commonly adopted by
        people. These dog serve as not only pets, but friends, commpanions,
        family members, service animals and therapy dogs. We love them and are
        glad to have them in our lives.
      </p>
      <div id="dogImages">
        <figure>
          <img src="https://images.wagwalkingweb.com/media/daily_wag/sense_guides/training/1542462155.1/can-dogs-smell-flowers_training.jpg" />
          <figcaption>Rocky - German Sheperd</figcaption>
        </figure>

        <figure>
          <img src="https://pet-health-content-media.chewy.com/wp-content/uploads/2025/03/07195249/mini-poodle-haircut.jpg" />
          <figcaption>Fuflly - Poodle</figcaption>
        </figure>

        <figure>
          <img src="https://cdn.shopify.com/s/files/1/0015/5117/1636/files/Black_labrador_holding_a_stick.jpg?v=1696329138" />
          <figcaption>Midnight - Labrador Retriever</figcaption>
        </figure>
      </div>
    </main>
  );
}

export default App;
