import React from 'react';
import MiniDrawer from '../MiniDrawer';
import EnhancedTable from './inbox/inboxMail';
import Grid from '@material-ui/core/Grid';
import '../App.css';
class Inbox extends React.Component {

  render() {
    return (
      <div className="Dashboard">
        <MiniDrawer/>     
      </div> 
    );
  }
}
  
export default Inbox;
  