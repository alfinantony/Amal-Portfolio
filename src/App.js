import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skills/skill";
import Gallery from "./components/Gallery/gallery";
import Exhibition from "./components/Exhibition/exhibition";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Intro/>
       <Skill/>
       <Gallery/>
       <Exhibition/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
