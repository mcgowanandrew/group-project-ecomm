import React from 'react';
import GlobalStyles from "./components/GlobalStyles"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage"
///
function App() {

  return (
    <BrowserRouter>
          <GlobalStyles />
          <Switch>
          <Route exact path="/">
          <LandingPage />
        </Route>
        </Switch>
    </BrowserRouter>

  )
}

export default App;
