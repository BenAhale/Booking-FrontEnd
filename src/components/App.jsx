import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Bookings from "./Bookings"
import Navbar from "./Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/bookings" component={Bookings} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;