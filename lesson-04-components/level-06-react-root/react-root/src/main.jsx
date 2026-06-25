import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const divTag = document.getElementById("root"); // save the element in the variable divTag first

const root = createRoot(divTag); // pass divTag to createRoot and save the Root object in "root"


// createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
     <main>
      <h1>React Root</h1>
      <p>
        React roots acts as the main gateway and entry point for a React application.
        It hooks into a single, empty HTML element from the host file and dynamically
        injects the entire user interface tree directly into that space.
        <br/><br/>
        <strong>Think of it as:</strong>
        a designated constructon zone on your web page.
        It grabs one empty box from your regular HTML file and completely fills it with
        your entire webstie's design, content, and interactive parts.
      </p>
    </main>
    {/* <App /> */}
  </StrictMode>,
)

