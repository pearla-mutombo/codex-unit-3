import { useState } from "react";

export default function Main() {
  const result = useState(0);

  // debugger;

  const count = result[0];
  const setCount = result[1];

  return (
    <main>
      <h2>Main Content Area</h2>
      <button onClick={handleClick}>Click Counter</button>
      <p>Count: {count}</p>
      <p>
        Think of Stateful Variables as a component's short-term memory. Instead
        of forgetting everything when the page updates, it remembers the current
        count. When you click the button, you are telling that memory to add 1,
        which triggers the app to refresh the screen with the brand-new number.
        <br />
        <strong>Basically: </strong>
        <br />
        Stateful variables remembers their data even when the screen updates.
        Clicking the button updates this memory and instantly forces the screen
        to refresh so you can see the new number right away.
        <br />
        <strong>Think of a Sketchpad Analogy:</strong>
        <br />
        Normal variables reset every time the page refreshes, like writing on a
        whiteboard that gets erased. Stateful variables are like a
        sketchpad-they hold onto your data even when the page re-draws itself.
        When you clik the button, it changes the number on the pad and tells the
        page to instantly show that new number on the screen.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();

    // debugger;

    setCount(count + 1);

    debugger;
  }
}
