import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout.js";
import Login from "./components/Login/Login";
import { auth } from "./components/Firebase/firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // This will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("This user is >>>", authUser);

      if (authUser) {
        // This means that the user just logged / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
