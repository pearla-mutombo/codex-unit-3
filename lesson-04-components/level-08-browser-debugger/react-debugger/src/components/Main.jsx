export default function Main() {
  const message =
    "To start the react code for debugger ensure that your Vite server is running in the terminal. Open the run and debug panel from the left side bar. for regular window users click the gear icon to configure lauch.json with chrome type configuration, pointing to your local server URL. Make sure you're on the react-debugger and click the green play button. This should open up in your chrome browser. for mac users click on the RUN and DEBUG green button, then read and follow the pop-up-icon messages to instruct you on when the chrome  is running. And close out any additional chrome browser that's already running, it prompts you to say or click on 'debug anyways'. ";
  // debugger
  return (
    <main>
      <p>
        {message}
        {/* React Template is a pre-built foundation of code that provides a
        structural skeleton for a web application. Developers use this template
        as a starting point so they don't have to start/write from strach. */}
      </p>
    </main>
  );
}
