import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
