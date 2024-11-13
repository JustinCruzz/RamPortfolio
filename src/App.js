//import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './Contact.js';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
