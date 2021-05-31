import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import ShopAll from "./components/ShopAll";
import Categories from "./components/Categories/Categories";
import CategoryDetails from "./components/Categories/CategoryDetails"
import Cart from "./components/CartComponents/Cart";

///
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        {/* <Route exact path="/">
          <div className="App">
            <Navbar />
          </div> */}
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/category/:categoryName">
          <CategoryDetails />
        </Route>
        <Route exact path="/shop/shop-all">
          <ShopAll />
        </Route>
        <Route exact path="/shop/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
