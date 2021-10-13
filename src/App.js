import React from 'react';
import './style.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/index';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/*" exact>
            <Home />
          </Route>
        </Switch>
        <Content />
        <Footer />
      </Router>
    </div>
  );
}
