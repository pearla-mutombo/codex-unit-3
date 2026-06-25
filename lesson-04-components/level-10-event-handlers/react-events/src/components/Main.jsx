export default function Main() {
  return (
    <main>
      <h2>Main Content Area</h2>
      <button onClick={handleClick}>Click event</button>
    </main>
  );
}

function handleClick(event) {
  event.preventDefault();
  debugger;
  console.log(
    "How to use click event hanlder in react: You pass a function to the 'onClick' prop to a JSX element. An example would be: 'onClick={handleClick}'.",
    "To use a click event handler in React, define a function, for example - 'handleClick' and pass  its reference to the element's 'onClick' attribute using JSX curly braces.",
    "React uses camelCase for event names instead of lowercase HTML event names."
  );
}
