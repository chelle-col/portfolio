import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import FourOhFour from './FourOhFour';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import bgImage from './images/background.jpg';
import Footer from './components/Footer';

function App() {
  console.log(bgImage)
  return (
    <div className='App' style={{backgroundImage: `url(${bgImage})`}}>
      {/* <div className='Background' style={{backgroundImage: `url(${bgImage})`}}></div> */}
      <NavBar />
      <div className='container'>
        <div className='wrapper'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/projects'>
              <Projects/>
            </Route>
            <Route exact path='/resume'>
              <Resume />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route>
              <FourOhFour />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
