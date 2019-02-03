import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import React from "react";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* When the path is exactly '/', load StorePicker */}
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
      {/* Leave out the path to have a catch-all error page */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
