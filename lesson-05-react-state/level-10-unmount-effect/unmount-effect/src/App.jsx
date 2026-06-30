import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [unmount, setUnmount] = useState(false);
  let mainComponent = <Main setUnmount={setUnmount} />;
  if (unmount) {
    mainComponent = <></>;
  }
  debugger;
  return (
    <>
      <Header />
      {mainComponent}
      <Footer />
    </>
  );
}

export default App;
