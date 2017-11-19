import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Polls from "./Polls";
import "./App.css";

const App = () =>
  <BrowserRouter>
    <div>
      <Navigation title="Ian Henderson"/>
      <Route exact path="/" component={Home}/>
      <Route path="/polls" component={Polls}/>
    </div>
  </BrowserRouter>

export default App;
