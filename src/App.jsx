import Hero from "./components/Hero";
import About from "./components/About";
import Essay from "./components/Essay";
import Thesis from "./components/Thesis";
import useReveal from "./hooks/useReveal";
import Gallery from "./components/Gallery";
import AboutAuthor from "./components/AboutAuthor";
import "./styles/global.css";
import "./styles/animations.css";



export default function App() {
  useReveal();

  return (
    <>
      <Hero className="reveal" />
      <About className="reveal" />
      <Essay className="reveal" />
      <AboutAuthor className="reveal"/>
      <Gallery className="reveal" />
       <Thesis className="reveal" />
    </>
  );
}
