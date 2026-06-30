import { useState, useEffect, use } from "react";

export default function Main() {
  const [didMount, setDidMount] = useState(false);
  const [didUpdate, setDidUpdate] = useState(false);
  const [message, setMessage] = useState("The Main component hasn't updated.");

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [message]);

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>Component has mounted: {didMount.toString()}</p>
      <br />

      <button onClick={handleClick}>Click to update</button>
      <br />

      <p>Component has updated: {didUpdate.toString()}</p>
      <br />

      <p>Component status: {message}</p>
      <br />

      <p>
        How to track update phase and Why? we use a piece of state like
        'didMount' to initialized to false, which turned true inside an empty
        dependency useEffect. We have to check if 'didMount' is true, to
        safeguard against triggering update logic prematurely during mount
        phase, creating a false positive.
      </p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    debugger;
  }

  function componentDidUpdate() {
    if (didMount) {
      setDidUpdate(true);
    }
  }

  function handleClick() {
    setMessage("The main component has updated.");
  }
}
