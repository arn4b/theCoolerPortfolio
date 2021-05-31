import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
