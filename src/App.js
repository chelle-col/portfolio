import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import FourOhFour from './FourOhFour';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
    <NavBar />
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
    </>
  );
}

export default App;
