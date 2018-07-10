import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import '../App.css';
import SimpleTable from './caseTable';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CheckCircle from '@material-ui/icons/CheckCircle';
import AddBox from '@material-ui/icons/AddBox';
import Clear from '@material-ui/icons/Clear';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing.unit,
  
  }
});

const ranges = [
  {
    value: 'Assign A',
    label: 'Assign A',
  },
  {
    value: 'Assign B',
    label: 'Assign B',
  },
  {
    value: 'Assign C',
    label: 'Assign C',
  },
];

const ranges1 = [
  {
    value: 'Type 1',
    label: 'Type 1',
  },
  {
    value: 'Type 2',
    label: 'Type 2',
  },
  {
    value: 'Type 3',
    label: 'Type 3',
  },
];

const ranges2 = [
  {
    value: 'Sub type 1',
    label: 'Sub type 1',
  },
  {
    value: 'Sub type 2',
    label: 'Sub type 2',
  },
  {
    value: 'Sub type 3',
    label: 'Sub type 3',
  },
];

const ranges3 = [
  {
    value: 'Active',
    label: 'Active',
  },
  {
    value: 'InActive',
    label: 'InActive',
  },
  {
    value: 'Pogress',
    label: 'Pogress',
  },
];

const ranges4 = [
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Latin',
    label: 'Latin',
  },
];

const ranges5 = [
  {
    value: 'Assign To 1',
    label: 'Assign To 1',
  },
  {
    value: 'Assign To 2',
    label: 'Assign To 2',
  },
  {
    value: 'Assign To 3',
    label: 'Assign To 3',
  },
];

const ranges6 = [
  {
    value: 'Client 1',
    label: 'Client 1',
  },
  {
    value: 'Client 2',
    label: 'Client 2',
  },
  {
    value: 'Client 3',
    label: 'Client 3',
  },
];

const ranges7 = [
  {
    value: 'Reference 1',
    label: 'Reference 1',
  },
  {
    value: 'Reference 2',
    label: 'Reference 2',
  },
  {
    value: 'Reference 3',
    label: 'Reference 3',
  },
];

const ranges8 = [
  {
    value: 'Assign To 1',
    label: 'Assign To 1',
  },
  {
    value: 'Assign To 2',
    label: 'Assign To 2',
  },
  {
    value: 'Assign To 3',
    label: 'Assign To 3',
  },
];

class InputAdornments extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <div className={'caseButton'}>
      <span className={'button-case'}>
      <Button variant="contained" color="primary" className={classes.button}>
        Save <CheckCircle/>
      </Button> 
     <span class={'save_clear'}>
      <Clear/>
      </span>
      </span> 
      </div>  
      <Divider />
        <TextField
          label="Case Id"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          label="Receved"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />  
        <TextField
          label="Due"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />            
        <TextField
          select
          label="Assigned To"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
        
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}></FormControl>
        <TextField
          select
          label="Type"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
        
          {ranges1.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Sub Type"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
        
          {ranges2.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         <TextField
          select
          label="Status"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
        
          {ranges3.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                       
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Subject</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

 <div className={'checkbox-box'}>
        <TextField
          select
          label="Language"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
        
          {ranges4.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Assigned To"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
        
          {ranges5.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>	

          <span className="chaeck_box">
        
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Urgent"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Sensitive"
        />   
        
        </span>      
        </div>	
        <FormControl fullWidth className={classes.margin}></FormControl>
        <FormControl fullWidth className={"hight"}>
        <TextField 
          select
          label="Client *"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
    
          {ranges6.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <AddBox className={'client_add_box'} primary/>
        </FormControl>
        <FormControl fullWidth className={'hight'}>
        <TextField 
          select
          label="Reference *"
          className={classNames(classes.textField, classes)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
    
          {ranges7.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <span>
        <AddBox className={'ref_add_box'} primary/>
        </span>
        </FormControl>


        <FormControl fullWidth className={classes.margin}>
          <SimpleTable/>
          </FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Subject</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <br/>
        <br />
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
