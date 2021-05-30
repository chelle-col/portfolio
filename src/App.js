import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import FourOhFour from './FourOhFour'
import Placeholder from './Placeholder';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/projects'>
        <Placeholder/>
      </Route>
      <Route exact path='/resume'>
        <Placeholder />
      </Route>
      <Route exact path='/contact'>
        <Placeholder />
      </Route>
      <Route>
        <FourOhFour />
      </Route>
    </Switch>
    </>
  );
}

export default App;
