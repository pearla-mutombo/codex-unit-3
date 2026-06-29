import { useState } from "react";

export default function Main() {
  const [count, setCount] = useState(0);
  debugger;

  return (
    <main>
      <h2>Main Content Area</h2>
      <button onClick={handleClick}>Click Counter</button>
      <p>Count: {count}</p>

      <p>
        'useState' is a react hook that lets you add state into a component. It
        returns an array with two elements: the current state value and a
        function to update it or set it. We use array destructuring to easily
        assign names to these two elements. For example "const [count, setCount]
        = useState(0)".
        <br />
        <br />
        <strong>Think of useState: </strong>
        as a special box that holds a piece of data for your app. When you open
        the box, it always gives you exactly two things:
        <br />
        1.<strong>The current date</strong> (like the number 0). 2.
        <strong>A remote control</strong> used exclusively to change that data.
        <br />
        <br />
        Instead of taking these two things out one by one, React uses a shortcut
        called "array destructuring". This shortcut lets you unpack both the
        data and its remote control at the exact same time, immediately naming
        them 'count' and 'setCount' in a single, neat line of code.
      </p>
    </main>
  );
  function handleClick(event) {
    event.preventDefault();

    debugger;

    setCount(count + 1);
  }
}
