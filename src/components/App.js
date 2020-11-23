import '../styles/css/index.css';
import Hero from './Hero';
import SideNav from './SideNav';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <div>
      <SideNav />
      <div className="section">
        <Hero />
        <AboutMe />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
