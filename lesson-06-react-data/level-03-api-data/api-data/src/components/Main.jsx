import { useState, useEffect } from "react";

export default function Main() {
  const [characters, setCharacters] = useState([]);

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>Component status: DidMount {didMount.toString()}</p>

      <section>{characters}</section>
      <p>
        How to use map to render a data array from an API: to render an array
        from an API in react, you fetch the data inside a lifecycle hook like
        'useEffect'. Once the data array is received, you use the JavaScript map
        method to loop through each item, passing a callback function that
        transforms the raw data objects into a React structured element.
        Finally, you save this map array into a state variable, causing React to
        automatically render and update an item on the DOM tree.
      </p>
    </main>
  );

  function toCharacters(dataItem) {
    const details = (
      <details key={dataItem.index}>
        <summary>{dataItem.fullName}</summary>
        <figure>
          <img src={dataItem.image} />
          <figcaption>{dataItem.interpretedBy}</figcaption>
        </figure>
      </details>
    );
    return details;
  }

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

  async function handleData() {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );
    const data = await response.json();
    console.log(data);
    const details = data.map(toCharacters);
    setCharacters(details);
  }
}
