import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
// import Navbar from "./components/Navbar/Navbar";
import ShopAll from "./components/ShopAll";
import Categories from "./components/Categories";
import Entertainment from "./components/CategoryComponents/Entertainment";
import Fitness from "./components/CategoryComponents/Fitness";
import Lifestyle from "./components/CategoryComponents/Lifestyle";
import Medical from "./components/CategoryComponents/Medical";
import Cart from "./components/CartComponents/Cart";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/entertainment">
          <Entertainment />
        </Route>
        <Route exact path="/Fitness">
          <Fitness />
        </Route>
        <Route exact path="/Lifestyle">
          <Lifestyle />
        </Route>
        <Route exact path="/medical">
          <Medical />
        </Route>
        <Route exact path="/shop-all">
          <ShopAll />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
