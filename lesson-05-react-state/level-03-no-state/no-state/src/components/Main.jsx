export default function Main() {
  let count = 0;

  return (
    <main>
      <h2>Main Content Area</h2>
      <button onClick={handleClick}>Click counter</button>
      <p>Current Count: {count}</p>
      <p>
        Stateless variables do not trigger a component re-render when they
        change. When you click the button, the local variables increments in
        memory, but the UI will continue to display 0 because React does not
        know it needs to update.
        <br />
        <strong>Basically: </strong>
        Changing a normal variable doesn't automatically refresh the screen.
        When you click the button, the computer updates the number behind the
        scenes, but the page keeps showing 0 because React doesn't realize it
        needs to redraw anything.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();
    // debugger;
    count = count + 1;
    debugger;
  }
}
