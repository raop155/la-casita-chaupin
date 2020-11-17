import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <header id='header'></header>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/menu' exact></Route>
        </Switch>
      </Router>
      <footer id='footer'></footer>
    </div>
  );
}

export default App;
