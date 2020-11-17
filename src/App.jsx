import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className='App'>
      <header id='header'></header>
      <Router>
        <Switch>
          <Router path='/' exact>
            <Home />
          </Router>
          <Router path='/menu' exact>
            {/* <Menu /> */}
          </Router>
        </Switch>
      </Router>
      <footer id='footer'></footer>
    </div>
  );
}

export default App;
