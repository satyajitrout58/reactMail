import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Inbox from './component/Inbox';
import createCase from './component/createCase';
import user from './component/user';

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Inbox} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/createcase/:id" component={createCase} />
      <Route path="/user" component={user} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
