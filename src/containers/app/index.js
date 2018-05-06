import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import styles from './style.css' 

const App = () => (
  <div>
    <header className={styles.header}>
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/about-us" activeClassName="active">About</NavLink>
    </header>

    <main>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App