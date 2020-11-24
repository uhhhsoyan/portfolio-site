import '../styles/css/index.css';
import Hero from './Hero';
import SideNav from './SideNav';
import MobileNav from './MobileNav';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
    <div>
      <SideNav />
      <MobileNav />
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
