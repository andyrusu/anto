import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Configuration from './Configuration';
import Columns from './Columns';
import Circles from './Circles';

function TabLink({ to, activeOnlyWhenExact, children }) {
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

class App extends React.Component
{
  defaultState = { from: "", to: "" };

  constructor(props)
  {
    super(props);
    this.state = this.defaultState;

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNumberChange(event)
  {
    let n = event.target.value;

    if (n > 0 && n < 10)
    {
      if (event.target.getAttribute("name")==="from")
      {
        this.setState({from: n});
      }
      else
      {
        this.setState({to: n});
      }
    }
  }

  handleReset(event)
  {
    this.setState(this.defaultState);
  }

  render()
  {
    return (
      <Router>
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <TabLink to="/" activeOnlyWhenExact={true}>Configurare</TabLink>
              <TabLink to="/columns" activeOnlyWhenExact={true}>Calcule pe coloane</TabLink>
              <TabLink to="/circles">Calcule in cercuri</TabLink>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Configuration from={this.state.from} to={this.state.to} handleChange={this.handleNumberChange} handleReset={this.handleReset}/>
            </Route>
            <Route path="/columns">
              <Columns from={this.state.from} to={this.state.to} />
            </Route>
            <Route path="/circles">
              <Circles number={this.state.number} />
            </Route>
  
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
