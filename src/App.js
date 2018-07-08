import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import MiniDrawer from './MiniDrawer';
//import Dashboard from './component/Dashboard.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
const Home = () => 'hiiiiiiiiiii';
const App = () =>(
  <Router>
  <Route path="/" Component={Home} />
</Router>
);


export default App;
