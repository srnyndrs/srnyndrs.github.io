import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import MenuItems from './components/MenuItems';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';
import Divider from './components/Divider';

function App() {
  return (
    <div className="drawer overflow-x-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <main id="home" className="w-full mt-12 overflow-x-hidden">
          <Home />
          <Divider id="about" name="About"/>
          <About />
          <Divider id="skills" name="Skills"/>
          <Skills />
          <Divider id="experience" name="Experience"/>
          <Experience />
          <Divider id="projects" name="Projects"/>
          <Projects />
        </main>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 mt-14 lg:mt-0">
          <MenuItems />
        </ul>
      </div>
    </div>
  );
}

export default App;
