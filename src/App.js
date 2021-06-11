import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Preloader from './Components/Preloader';
import {useState, useEffect} from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4500)
  }, []);

  return (
    <>
    {loading 
    
    ?
      <Preloader />
    :

    <div className="App">
      <Landing />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>

    }
    </>
  );
}

export default App;
