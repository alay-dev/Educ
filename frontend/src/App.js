import React from 'react' ;
import { Router, Switch, Route } from 'react-router-dom' ;
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import  history from './history' ;

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
