import React from 'react'
import Login from './Login'
import ParticleBackground from './ParticleBackground'
import KonfabID_Login from './KonfabID_Login'
import './reset.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <ParticleBackground />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/KonfabID_Login' exact component={KonfabID_Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
