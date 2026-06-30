const lifecycleMessages = [
  " a) React components go through three main phases which are mounting, updating, and unmounting: Think of a React component like a digital picture frame going through three stages: setup, updates, and shutdown.",
  " b) Mounting is the initial phase when the component is created and inserted into the browser DOM: Think of mounting as the setup phase where you first unbox the frame and hang it up on your living room wall.",
  " c) During mounting, React sets up the component's initial state and runs its first render: During setup, the frame turns on for the very first time and loads its default settings.",
  " d) The updating phase happens whenever a component's state or props change after it is already on the screen: The updating phase happens whenever you change the picture or adjust the brightness while it is on the wall.",
  " e) An update forces the component to re-render so the user interface stays accurate and fresh: This update forces the screen to instantly refresh so you always see the newest image look exactly right.",
  " f) Unmounting is the final phase when a component is completely removed from the browser DOM: Unmounting is the shutdown phase where you take the frame off the wall and unplug it completely.",
  " g) During unmounting, React cleans up residual data like active timers or event listeners to prevent memory leaks: During shutdown, the frame clears its temporary memory so it does not waste electricity or glitch out later.",
  "1. First, a React component is born when it mounts and injects itself into the browser's DOM.,",
  "2. Next, the component renders its JSX to define exactly what the user sees on the screen.",
  "3. As users interact with the app, changes to state or props cause the component to update and re-render.",
  "4. Finally, a component dies and cleans up after itself when it unmounts from the DOM entirely.",
  "Developers use hooks like useEffect to trigger specific actions at different stages of this lifetime",
];

console.log(lifecycleMessages);
