import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

import Home from "../components/Home/index";
import PublicRoute from "./PublicRoute";

import Extra from "../Extra";

class AppRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute exact path="/extra" component={Extra} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
export default AppRoutes;
