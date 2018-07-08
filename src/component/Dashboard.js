import React from 'react';
import MiniDrawer from '../MiniDrawer';
import Typography from '@material-ui/core/Typography';
class Dashboard extends React.Component {

  render() {
    return (
      <div className="Dashboard">
      <MiniDrawer/>
          <main className={"content"}>
          <div className={"toolbar"} />
          <Typography noWrap>
            <div class="inboxContent">

            </div>
          </Typography>
        </main>  
      </div>   
    );
  }
}
  
export default Dashboard;
  