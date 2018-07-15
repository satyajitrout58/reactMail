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
import { Grid } from '@material-ui/core';
import $ from 'jquery';

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



class InputAdornments extends React.Component {
  state = {
    type: '',
    subType: '',
    status: '',
    titel: '',
    sufix: '',
    ocupation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    companyName: '',
    relatedTo: '',
    phone1: '',
    ext1: '',
    type1: '',
    email1: '',
    phone2: '',
    ext2: '',
    type2: '',
    email2: '',
    phone3: '',
    ext3: '',
    type3: '',
    email3: '',
    address: '',
    type4: '',
    adress2: '',
    city: '',
    pinCode: '',
    PostCode: '',
    error_val: true,
    typeErrorText: '',
    firstNameErrorText: '',
    lastNameErrorText: '',
    phoneErrorText: '',
    emailErrorText: ''

  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChangeCheck = prop => event => {
      //console.log([prop]);
      !this.state[prop] ? this.setState({ [prop]: true }) : this.setState({ [prop]: false }) ;
      console.log(this.state[prop]);
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handelSave = () => {
    if(this.state.type == '') {
      this.setState({
        typeErrorText: 'Please select Types',
        error_val: false
      });
    }

    if(this.state.firstName == '') {
      this.setState({
        firstNameErrorText: 'First name is required',
        error_val: false
      });
    }
    
    else if(this.state.lastName == '') {
      console.log('Hiii' + this.state.lastName);
      this.setState({
        lastNameErrorText: 'Last name is required',
        error_val: false
      });
    }

    else if(this.state.phone1 == '') {
      this.setState({
        phoneErrorText: 'Phone name is required',
        error_val: false
      });
    }

   else  if(this.state.email1 == '') {
      this.setState({
        emailErrorText: 'Email name is required',
        error_val: false
      });
    } else {
      this.setState({
        error_val: true
      });
    }

    setTimeout(() => {
      if(this.state.error_val){    
        $.post({
          async:true,
          url: 'http://13.126.203.222:3006/user/create',
          // method: 'post',
          data: {type:this.state.type, subType: this.state.subType, status: this.state.status, titel: this.state.titel, sufix: this.state.sufix, ocupation: this.state.ocupation, firstName: this.state.firstName, middleName: this.state.middleName, lastName: this.state.lastName, companyName: this.state.companyName, relatedTo: this.state.relatedTo, phone1: this.state.phone1, ext1: this.state.ext1, type1: this.state.type1, email1: this.state.email1, phone2:this.state.phone2,ext2:this.state.ext2,type2:this.state.type2,email2:this.state.email2,phone3:this.state.phone3,ext3:this.state.ext3,type3:this.state.type3,email3:this.state.email3,address:this.state.address,type4:this.state.type4,adress2:this.state.adress2,city:this.state.city,pinCode:this.state.pinCode,PostCode:this.state.PostCode },
          crossDomain:true,
          headers: {'Access-Control-Allow-Origin': '*'},
          success: (apiData)=> {
            window.location.href='/';
          }
        });
        }
    },1000);
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <div className={'caseButton'}>
      <span className={'button-case'} onClick={this.handelSave.bind(this)}>
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
          label="Type"
          helperText={ this.state.typeErrorText}
          error
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.type}
          onChange={this.handleChange('type')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />  
        <TextField
          label="Sub Type"
          id="simple-start-adornment"
          onChange={this.handleChange('subType')}
          value={this.state.subType}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />      
        <TextField
          label="Status"
          id="simple-start-adornment"
          onChange={this.handleChange('status')}
          value={this.state.status}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />          
        <FormControl fullWidth className={classes.margin}></FormControl>
        <Grid sm={'3'}>
        <TextField
          select
          label="Titel"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.titel}
          onChange={this.handleChange('titel')}
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
        </Grid>
        <Grid sm={'3'}>
        <TextField
          select
          label="Sufix"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.sufix}
          onChange={this.handleChange('sufix')}
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
        </Grid>
        <Grid sm={'6'}>
        <TextField
          select
          label="Ocupation"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.ocupation}
          onChange={this.handleChange('ocupation')}
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
        </Grid>                
        <FormControl fullWidth className={classes.margin}></FormControl>

        <TextField
          label="First Name"
          error
          helperText={ this.state.firstNameErrorText}
          id="simple-start-adornment"
          onChange={this.handleChange('firstName')}
          value={this.state.firstName}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 

        <TextField
          label="Middle Name"
          id="simple-start-adornment"
          onChange={this.handleChange('middleName')}
          value={this.state.middleName}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 

        <TextField
          label="Last Name"
          error
          helperText={ this.state.lastNameErrorText}
          id="simple-start-adornment"
          onChange={this.handleChange('lastName')}
          value={this.state.lastName}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />                 

    <FormControl fullWidth className={classes.margin}></FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Organisation or Company Name</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.companyName}
            onChange={this.handleChange('companyName')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

      <FormControl fullWidth className={"hight"}>
        <TextField 
          select
          label="Related To"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.relatedTo}
          onChange={this.handleChange('relatedTo')}
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

		
		<Grid sm={'3'}>
        <TextField
          label="Phone"
          error
          helperText={ this.state.phoneErrorText}
          id="simple-start-adornment"
          onChange={this.handleChange('phone1')}
          value={this.state.phone1}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
		</Grid>
		<Grid sm={'3'}>
         <TextField
          label="Ext"
          id="simple-start-adornment"
          onChange={this.handleChange('ext1')}
          value={this.state.ext1}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
		<Grid sm={'3'}>
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type1}
          onChange={this.handleChange('type1')}
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
		</Grid>
		<Grid sm={'3'}>
         <TextField
          error
          helperText={ this.state.emailErrorText}
          label="Email"
          id="simple-start-adornment"
          onChange={this.handleChange('email1')}
          value={this.state.email1}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
  <FormControl fullWidth className={classes.margin}></FormControl>

		<Grid sm={'3'}>
		<TextField
          label="Phone"
          id="simple-start-adornment"
          onChange={this.handleChange('phone2')}
          value={this.state.phone2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
		</Grid>
		<Grid sm={'3'}>
         <TextField
          label="Ext"
          id="simple-start-adornment"
          onChange={this.handleChange('ext2')}
          value={this.state.ext2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
		<Grid sm={'3'}>
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type2}
          onChange={this.handleChange('type2')}
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
		</Grid>
		<Grid sm={'3'}>
         <TextField
          label="Email"
          id="simple-start-adornment"
          onChange={this.handleChange('email2')}
          value={this.state.email2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />  
		</Grid>
  <FormControl fullWidth className={classes.margin}></FormControl>


		<Grid sm={'3'}>
        <TextField
          label="Phone"
          id="simple-start-adornment"
          onChange={this.handleChange('phone3')}
          value={this.state.phone3}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
		</Grid>
		<Grid sm={'3'}>
         <TextField
          label="Ext"
          id="simple-start-adornment"
          onChange={this.handleChange('ext3')}
          value={this.state.ext3}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
		<Grid sm={'3'}>
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type3}
          onChange={this.handleChange('type3')}
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
		</Grid>
		<Grid sm={'3'}>
         <TextField
          label="Email"
          id="simple-start-adornment"
          onChange={this.handleChange('email3')}
          value={this.state.email3}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />     
		</Grid>
  <FormControl fullWidth className={classes.margin}></FormControl>



        <TextField
          label="Address"
          id="simple-start-adornment"
          onChange={this.handleChange('address')}
          value={this.state.address}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
      
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type4}
          onChange={this.handleChange('type4')}
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

          
  <FormControl fullWidth className={classes.margin}></FormControl>

<FormControl fullWidth className={"hight"}>
<TextField
          label="Address2"
          id="simple-start-adornment"
          onChange={this.handleChange('adress2')}
          value={this.state.adress2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
</FormControl>


        <TextField
          label="City"
          id="simple-start-adornment"
          onChange={this.handleChange('city')}
          value={this.state.city}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 


         <TextField
          label="Pincode"
          id="simple-start-adornment"
          onChange={this.handleChange('pinCode')}
          value={this.state.pinCode}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />     
        <TextField
          label="Postal Code"
          id="simple-start-adornment"
          onChange={this.handleChange('PostCode')}
          value={this.state.PostCode}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
