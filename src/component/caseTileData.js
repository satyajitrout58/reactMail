
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircle from '@material-ui/icons/CheckCircle';
import MailIcon from '@material-ui/icons/Mail';
import SettingsInputHdmi from '@material-ui/icons/SettingsInputHdmi';
import Note from '@material-ui/icons/Note';
import Wallpaper from '@material-ui/icons/Wallpaper';
import '../App.css';
import {Input, FormGroup} from 'reactstrap';
export const mailFolderListItems = (
  <div>
    <div class="search">
        <FormGroup>
          <Input type="text" name="search" id="search_box" placeholder="Search" className={'text'} />
        </FormGroup>
    </div>
    <ListItem button>
      <ListItemIcon disableTypography={true}>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Email" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Wallpaper />
      </ListItemIcon>
      <ListItemText primary="Document" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Note />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsInputHdmi />
      </ListItemIcon>
      <ListItemText primary="Dicsion" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CheckCircle />
      </ListItemIcon>
      <ListItemText primary="Task" />
    </ListItem>
  </div>
);

