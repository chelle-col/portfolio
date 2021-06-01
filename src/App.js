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
  return (
    <>
    <NavBar />
    <div className='container' style={
        {backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        opacity: '60%'}
        }>
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
    </>
  );
}

export default App;
