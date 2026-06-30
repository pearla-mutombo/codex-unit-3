import { useEffect } from "react";

export default function Main({ setUnmount }) {
  useEffect(componentDidUnmount, []);
  debugger;
  return (
    <main>
      <h2>Main Content Area</h2>

      <button onClick={handleClick}>Click to Unmount</button>

      <p>
        How to run code during the unmount phase: to run code during the unmount
        phase in react, you return a clean up function from a useEffect hook
        with an empty dependency array. React automatically invokes this return
        function right before the component is removed from the DOM. Also it
        checks if it is unmounted; if it is then it returns an empty component
        or fragment.
      </p>
    </main>
  );

  function componentDidUnmount() {
    debugger;
    return () => {
      alert("The Main Component has unmounted.");
    };
  }

  function handleClick() {
    setUnmount(true);
    debugger;
  }
}
