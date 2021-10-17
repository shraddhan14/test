import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;