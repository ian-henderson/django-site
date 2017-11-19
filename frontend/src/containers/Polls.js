import React from "react";
import { Route } from "react-router-dom";
import PollsCreate from "./PollsCreate"
import PollsIndex from "./PollsIndex"
import "./Polls.css";

const Polls = () =>
  <main className="container" role="main">
    <Route exact path="/polls" component={PollsIndex}/>
    <Route path="/polls/create" component={PollsCreate}/>
  </main>

export default Polls;