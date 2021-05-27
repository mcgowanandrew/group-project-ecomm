import React from 'react';
import GlobalStyles from "./GlobalStyles"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
          <GlobalStyles />
          <Switch>
          <Route exact path="/">
          <LangingPage />
        </Route>
        </Switch>
    </BrowserRouter>

  )
}

export default App;
