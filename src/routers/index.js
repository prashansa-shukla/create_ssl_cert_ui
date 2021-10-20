import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

import Home from "../components/Home/index";
import PublicRoute from "./PublicRoute";

class AppRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <Switch>
              <PublicRoute exact path="/" component={Home} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
export default AppRoutes;
