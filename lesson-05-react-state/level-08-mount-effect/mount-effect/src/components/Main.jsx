import { useState, useEffect } from "react";

export default function Main() {
  const [didMount, setDidMount] = useState(false);
  // debugger;
  useEffect(componentDidMount, []);

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>Component has mounted: {didMount.toString()}</p>

      <p>
        useEffect hook acts as a gateway to handle side affects outside the
        normal render flow. by passing the empty dependency array '([])', as the
        second argument, we tell react to trigger the call back exactly once,
        right after the component successfully injects into the DOM for the
        first time. This lets us realiably track or execute code specifically
        during the component's initial mount.
      </p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    debugger;
  }
}
