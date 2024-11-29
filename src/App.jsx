import { useState } from "react";
import "./app.scss";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/Parallax/Parallax";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      {/* <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section> */}

      <section id="Projects">
        <Parallax type="Portfolio" />
      </section>
      <section>
        <Portfolio/>
      </section>
    </>
  );
}

export default App;
