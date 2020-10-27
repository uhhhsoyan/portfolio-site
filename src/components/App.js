import './App.css';
import SideNav from './SideNav';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div>
      <SideNav />
      <div className="main">
        <div className="hero" id="home">
        </div>
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
