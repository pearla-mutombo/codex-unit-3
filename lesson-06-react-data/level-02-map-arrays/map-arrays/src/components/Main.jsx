import { useState, useEffect } from "react";
import subjectData from "../data/data.js";

export default function Main() {
  // debugger;
  const [didMount, setDidMount] = useState(false);

  const [subjects, setSubjects] = useState([]);

  useEffect(componentDidMount, []);

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>Component status: DidMount {didMount.toString()}</p>

      <section>{subjects}</section>

      <p>
        How to use map to render a data array with HTML: to render a data array
        with HTML in react, you pass a call back function to the map method.
        This call back transforms each data objects into a jsx elements. The
        resulting array of jsx elements can then be stored in state or directly
        embedded into the component return block, where React automatically
        iterates and renders them into the DOM tree.
      </p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    const details = subjectData.map(toDetails);
    setSubjects(details);
    // debugger;
  }

  function toDetails(dataItem) {
    const details = (
      <details key={dataItem.name}>
        <summary>{dataItem.name}</summary>
        <p>{dataItem.description}</p>
      </details>
    );
    // debugger;
    return details;
  }
}
