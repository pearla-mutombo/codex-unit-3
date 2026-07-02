import { useState, useEffect } from "react";

export default function Main() {
  const [didMount, setDidMount] = useState(false);

  const [values, setValues] = useState([]);

  useEffect(componentDidMount, []);

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>{"Component status: DidMount " + didMount}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input name="fullName" type="text" />
        </label>

        <label>
          Email:
          <input name="email" type="email" />
        </label>

        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <output>{values}</output>
      <br />
      <p>
        How to use map to render Form Values after they are submitted: When the
        form is submitted, we interperet the event and compile the input data
        into an array of objects. We then use the JavaScript map method to loop
        through this array, converting each raw data objects into interactive
        details and summary React elements, which are injected into the state
        and render in the DOM.
      </p>
    </main>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputs = [
      {
        label: "FullName",
        value: form.elements.fullName.value,
      },

      {
        label: "Email",
        value: form.elements.email.value,
      },

      {
        label: "Password",
        value: form.elements.password.value,
      },
    ];
    const details = formInputs.map(toDetails);
    setValues(details);
  }

  function toDetails(formInput, index) {
    const details = (
      <details key={index}>
        <summary>{formInput.label}</summary>
        <p>{formInput.value}</p>
      </details>
    );
    return details;
  }

  function componentDidMount() {
    setDidMount(true);
  }
}
