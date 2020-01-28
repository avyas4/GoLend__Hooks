import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./hooks/dashboard/dashboard";
import Vehicles from "./hooks/vehicles/vehicles";

const Routes = () => {
  return (
    <Route
      path="*"
      render={({ location }) => (
        <React.Fragment>
          <Switch location={location}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/years" component={Dashboard} />
            <Route exact path="/vehicles/:year" component={Vehicles} />
          </Switch>
        </React.Fragment>
      )}
    />
  );
};

export default Routes;
