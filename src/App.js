import React from 'react';
import 'Assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'page/LandingPage';


function App() {
  return (
    <Router>
        <Route path='/' component={LandingPage}></Route>
    </Router>
  );
}

export default App;
