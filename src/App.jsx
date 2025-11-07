import Hero from "./components/Hero";
import About from "./components/About";
import Essay from "./components/Essay";
import Thesis from "./components/Thesis";
import useReveal from "./hooks/useReveal";
import "./index.css";
import Gallery from "./components/Gallery";


export default function App() {
  useReveal();

  return (
    <>
      <Hero className="reveal" />
      <About className="reveal" />
      <Essay className="reveal" />
      <Thesis className="reveal" />
      <Gallery className="reveal" />
    </>
  );
}
