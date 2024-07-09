import Navbar from './components/Navbar/navbar';
import './App.css';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import TechStack from './components/TechStack/techstack';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <TechStack/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
