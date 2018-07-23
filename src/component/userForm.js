import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import '../App.css';
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


const ranges6 = [
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

const subTypeRange = [
  {
    value: 'subType 1',
    label: 'subType 1',
  },
  {
    value: 'subType 2',
    label: 'subType 2',
  },
  {
    value: 'subType 3',
    label: 'subType 3',
  },
];

const statusRange = [
  {
    value: 'Inactive',
    label: 'Inactive',
  },
  {
    value: 'Pogress',
    label: 'Pogress',
  },
];

const titleRange = [
  {
    value: 'title 1',
    label: 'title 1',
  },
  {
    value: 'title 2',
    label: 'tutle 2',
  },
  {
    value: 'title 3',
    label: 'title 3',
  },
];

const suffixRange = [
  {
    value: 'suffix 1',
    label: 'suffix 1',
  },
  {
    value: 'suffix 2',
    label: 'suffix 2',
  },
  {
    value: 'suffix 3',
    label: 'suffix 3',
  },
];

const occupationRange = [
  {
    value: 'occupation 1',
    label: 'occupation 1',
  },
  {
    value: 'occupation 2',
    label: 'occupation 2',
  },
  {
    value: 'occupation 3',
    label: 'occupation 3',
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
    emailErrorText: '',
    typePlaceHolder: 'Type',
    type1PlaceHolder:'Type',
    subTypePlaceHolder:'sub Type',
    statusPlaceholder:'Status',
    titlePlaceHolder: 'Title',
    suffixPlaceHolder: 'Suffix',
    occupationPlaceHolder: 'Ocupation',
    relatedToPlaceHolder: 'Related To',
    type2PlaceHolder:'Type',
    type3PlaceHolder:'Type',
    type4PlaceHolder:'Type',
   
  };

  handleChange = prop => event => {
    console.log(prop);
    this.setState({ [prop]: event.target.value });
    switch(prop) {
      case 'type':       
         this.setState({  
          typePlaceHolder: ''
         });
      break;
      case 'subType':       
      this.setState({  
        subTypePlaceHolder: ''
      });
      break;
      case 'satus':       
      this.setState({  
        statusPlaceholder:'',
      });                    
      break;
      case 'titel':       
      this.setState({  
        titlePlaceHolder: ''
      });
      break;
      case 'sufix':       
      this.setState({  
        suffixPlaceHolder: ''
      });
      break;
      case 'ocupation':       
      this.setState({  
        occupationPlaceHolder: ''
      });
      break;
      case 'relatedTo':       
      this.setState({  
        relatedToPlaceHolder: ''
      });
      break;
      case 'type1':       
      this.setState({  
        type1PlaceHolder: ''
      });
      break;
      case 'type2':       
      this.setState({  
        type2PlaceHolder: ''
      });
      break;
      case 'type3':       
      this.setState({  
        type3PlaceHolder: ''
      });
      break;
      case 'type4':       
      this.setState({  
        type4PlaceHolder: ''
      });
      break;
      }
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
    let emailVl = this.state.email1;
    let  re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    let phone =this.state.phone1;
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

    else if(isNaN(phone) || phone === '') {
      //alert('phone');
      this.setState({
        phoneErrorText: 'Please enter a valid phone number',
        error_val: false
      });
    }

   else  if(!re.test(emailVl)) {
     //alert('hii');
      this.setState({
        emailErrorText: 'Please enter a valid email',
        error_val: false
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
        this.setState({
          error_val: true
        });
    },1000);
  }
  
  handelClear = () => {
    this.setState({
      type: '',
      subType: '',
      satus: '',
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
      emailErrorText: '',
      typePlaceHolder: 'Type',
      type1PlaceHolder:'Type',
      subTypePlaceHolder:'sub Type',
      statusPlaceholder:'Status',
      titlePlaceHolder: 'Title',
      suffixPlaceHolder: 'Suffix',
      occupationPlaceHolder: 'Ocupation',
      relatedToPlaceHolder: 'Related To',
      type2PlaceHolder:'Type',
      type3PlaceHolder:'Type',
      type4PlaceHolder:'Type', 
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <div className={'caseButton'}>
      <span class={'save_clear'} onClick={this.handelClear.bind(this)}>
      <Clear/>
      </span>    
      <span className={'button-case'} onClick={this.handelSave.bind(this)}>
      <Button variant="contained" color="primary" className={classes.button}>
        Save <CheckCircle/>
      </Button> 
      </span> 
      </div>  
      <Divider />

         <TextField
          select
          label="Type"
          placeholder={'Type'}
          className={classNames(classes.margin, classes.textField)}
          value={this.state.type}
          onChange={this.handleChange('type')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.typePlaceHolder}</span></InputAdornment>,
          }}
        >
        
          {ranges6.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Sub Type"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.subType}
          onChange={this.handleChange('subType')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.subTypePlaceHolder}</span></InputAdornment>,
          }}
        >
        
          {subTypeRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Status"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.satus}
          onChange={this.handleChange('satus')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.statusPlaceholder}</span></InputAdornment>,
          }}
        >
        
          {statusRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FormControl fullWidth className={classes.margin}></FormControl>
        <Grid sm={'2'}>
        <TextField
          select
          label="Titel"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.titel}
          onChange={this.handleChange('titel')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.titlePlaceHolder}</span></InputAdornment>,
          }}
        >
        
          {titleRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid sm={'2'}>
        <TextField
          select
          label="Suffix"
          placeholder={'Suffix'}
          className={classNames(classes.margin, classes.textField)}
          value={this.state.sufix}
          onChange={this.handleChange('sufix')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.suffixPlaceHolder}</span></InputAdornment>,
          }}
        >
        
          {suffixRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        <Grid sm={'8'}>
        <TextField
          select
          label="Ocupation"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.ocupation}
          onChange={this.handleChange('ocupation')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.occupationPlaceHolder}</span></InputAdornment>,
          }}
        >
        
          {occupationRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>                
        <FormControl fullWidth className={classes.margin}></FormControl>
        <Grid sm={6}>
        <TextField
          label="First Name"
          error
          placeholder={'First Name'}
          helperText={ this.state.firstNameErrorText}
          id="simple-start-adornment"
          onChange={this.handleChange('firstName')}
          value={this.state.firstName}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
        </Grid>
        <Grid sm={2}>
        <TextField
          label="Middle Name"
          placeholder={'Middle Name'}
          id="simple-start-adornment"
          onChange={this.handleChange('middleName')}
          value={this.state.middleName}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
        </Grid>
        <Grid sm={4}>
        <TextField
          label="Last Name"
          placeholder={'Last Name'}
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
        </Grid>
    <FormControl fullWidth className={classes.margin}></FormControl>

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Organisation or Company Name</InputLabel>
          <Input
            id="adornment-amount"
            placeholder={'Organisation or Company Name'}
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
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.relatedToPlaceHolder}</span></InputAdornment>,
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
          placeholder={'Phone'}
          id="simple-start-adornment"
          onChange={this.handleChange('phone1')}
          value={this.state.phone1}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
		</Grid>
		<Grid sm={'2'}>
         <TextField
          label="Ext"
          placeholder={'Ext'}
          id="simple-start-adornment"
          onChange={this.handleChange('ext1')}
          value={this.state.ext1}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
		<Grid sm={'2'}>
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type1}
          onChange={this.handleChange('type1')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.type1PlaceHolder}</span></InputAdornment>,
          }}
        >
    
          {ranges6.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
		</Grid>
		<Grid sm={'5'}>
         <TextField
          error
          helperText={ this.state.emailErrorText}
          label="Email"
          placeholder={'Email'}
          id="simple-start-adornment"
          onChange={this.handleChange('email1')}
          value={this.state.email1}
          validators={['required', 'isEmail']}
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
          placeholder={'Phone'}
          id="simple-start-adornment"
          onChange={this.handleChange('phone2')}
          value={this.state.phone2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
		</Grid>
		<Grid sm={'2'}>
         <TextField
          label="Ext"
          placeholder={'Ext'}
          id="simple-start-adornment"
          onChange={this.handleChange('ext2')}
          value={this.state.ext2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
		<Grid sm={'2'}>
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type2}
          onChange={this.handleChange('type2')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.type2PlaceHolder}</span></InputAdornment>,
          }}
        >
    
          {ranges6.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
		</Grid>
		<Grid sm={'5'}>
         <TextField
          label="Email"
          placeholder={'Email'}
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
          placeholder={'Phone'}
          id="simple-start-adornment"
          onChange={this.handleChange('phone3')}
          value={this.state.phone3}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
		</Grid>
		<Grid sm={'2'}>
         <TextField
          label="Ext"
          placeholder={'Ext'}
          id="simple-start-adornment"
          onChange={this.handleChange('ext3')}
          value={this.state.ext3}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />   
		</Grid>
		<Grid sm={'2'}>
        <TextField 
          select
          label="Type"
          className={classNames(classes.textField, classes.margin)}
          value={this.state.type3}
          onChange={this.handleChange('type3')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.type3PlaceHolder}</span></InputAdornment>,
          }}
        >
    
          {ranges6.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
		</Grid>
		<Grid sm={'5'}>
         <TextField
          label="Email"
          placeholder={'Email'}
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


        <Grid sm={'9'}>
        <TextField
          label="Address"
          placeholder={'Address'}
          id="simple-start-adornment"
          onChange={this.handleChange('address')}
          value={this.state.address}
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
          value={this.state.type4}
          onChange={this.handleChange('type4')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><span className={'placeholder'}>{this.state.type4PlaceHolder}</span></InputAdornment>,
          }}
        >
    
          {ranges6.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
          
  <FormControl fullWidth className={classes.margin}></FormControl>

<FormControl fullWidth className={"hight"}>
<TextField
          label="Address2"
          placeholder={'Address2'}
          id="simple-start-adornment"
          onChange={this.handleChange('adress2')}
          value={this.state.adress2}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
</FormControl>

        <Grid sm={'8'}>
        <TextField
          label="City"
          placeholder={'City'}
          id="simple-start-adornment"
          onChange={this.handleChange('city')}
          value={this.state.city}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        /> 
        </Grid>
        <Grid sm={'2'}>
         <TextField
          label="Pincode"
          placeholder={'Pincode'}
          id="simple-start-adornment"
          onChange={this.handleChange('pinCode')}
          value={this.state.pinCode}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />  
        </Grid>
        <Grid sm={'2'}>   
        <TextField
          label="Postal Code"
          placeholder={'Postal Code'}
          id="simple-start-adornment"
          onChange={this.handleChange('PostCode')}
          value={this.state.PostCode}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        </Grid>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
