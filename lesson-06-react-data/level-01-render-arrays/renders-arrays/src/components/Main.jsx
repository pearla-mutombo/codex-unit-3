import { useState, useEffect } from "react";
import imageData from "../data/data.js";

export default function Main() {
  // debugger;
  const [didMount, setDidMount] = useState(false);

  const [images, setImages] = useState([]);

  useEffect(componentDidMount, []);

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>Component Status - Did Mount: {didMount.toString()}</p>
      <br />
      <section>{images}</section>
      <p>
        How to render a data array with HTML: you traverse the array using a
        loop or mapping method, wrap each data items properties in jsx tags,
        push them into a state full array and then render that array inside your
        component template.
        <br />
        <strong>Basically: </strong>
        <br />
        To show a list of data as images on a webpage using React, you take your
        list of information and loop through it right when the page first loads.
        For every item on your list, you pack its information into HTML tags
        like images and captions. By saving this new list into React's memory,
        React automatically takes those pieces and builds them right onto your
        screen.
      </p>
    </main>
  );

  function componentDidMount() {
    // debugger;
    setDidMount(true);
    const figures = [];
    for (let index = 0; index < imageData.length; index++) {
      // const element = array[index];
      const figure = (
        <figure>
          {" "}
          <img src={imageData[index].src} />
          <figcaption>{imageData[index].caption}</figcaption>
        </figure>
      );
      figures.push(figure);
    }
    setImages(figures);
    debugger;
  }
}
