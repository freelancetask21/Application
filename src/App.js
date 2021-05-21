import React from "react";
import CreateEmp from "./Components/createEmp";
import Dashboard from "./Components/dashboard";
import Login from "./Components/login";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderComponent from "./Components/header";
export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <Router>
          {/* 
          <Link to="/">login</Link><br />
          <Link to="/dashboard">dashboard</Link><br />
          <Link to="/createEmp">createEmp</Link>
          <h1>My React App   Project</h1><hr />
           */}
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <HeaderComponent />
              <Dashboard />
            </Route>
            <Route exact path="/createEmp">
              <HeaderComponent />
              <CreateEmp />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}
