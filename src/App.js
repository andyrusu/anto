import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Columns from './Columns';
import Circles from './Circles';

function TabLink({ to, activeOnlyWhenExact, children})
{
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={match ? "is-active" : ""}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <div class="tabs is-centered">
          <ul>
            <TabLink to="/" activeOnlyWhenExact={true}>Calcule pe coloane</TabLink>
            <TabLink to="/circles">Calcule in cercuri</TabLink>
          </ul>
        </div>
        <Switch>
          <Route path="/circles">
            <Circles />
          </Route>
          <Route path="/">
            <Columns />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
