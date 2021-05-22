import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from '../Pages/HomeScreen';

const ApplicationRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};
export default ApplicationRoutes;
