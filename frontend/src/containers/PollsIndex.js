import React from "react";
import { Link } from "react-router-dom";

const PollsIndex = () =>
  <div className="jumbotron">
    <h1 className="display-3">Polls</h1>
    <p className="lead">A simple polling app.</p>
    <hr className="my-4" />
    <p>Create a new poll or keep scrolling to see other polls.</p>
    <p className="lead">
      <Link to="/polls/create" className="btn btn-primary btn-lg" role="button">
        Create a poll
      </Link>
    </p>
  </div>

export default PollsIndex;