import React from "react";
import { Header, Footer, Home, Cart } from "./component/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleProduct from "./component/SingleProduct";
import Shipping from "./component/Shipping";
import Login from "./component/Login";
import Payment from "./component/Payment";
import PlaceOrder from "./component/PlaceOrder";
import Error from "./component/Error";
import Register from "./component/Register";
import Sidbar from "./component/Sidbar";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/sidbar" component={Sidbar} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/:id" children={<SingleProduct />} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
