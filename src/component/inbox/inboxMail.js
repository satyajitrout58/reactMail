import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Clear from '@material-ui/icons/Clear';
import Folder from '@material-ui/icons/Folder';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { NavLink } from "react-router-dom";
import $ from 'jquery';
import Cookies from 'universal-cookie';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'From', numeric: false, disablePadding: true, label: 'From' },
  { id: 'Subject', numeric: true, disablePadding: false, label: 'Subject' },
  { id: 'Receved', numeric: true, disablePadding: false, label: 'Receved' },
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
  //{ id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            InBox
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.handelMountData = this.handelMountData.bind(this);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [
        createData('Cupcake@gmail.com', 'test', 3.7, 4.3),
        createData('Donut@gmail.com', "test1", 25.0, 4.9),
        createData('Eclair@gmail.com', "test2", 16.0, 6.0),
        createData('Frozen yoghurt@gmail.com', "twst3", 24, 4.0),
        createData('Gingerbread@gmail.com', "test4", 16.0, 3.9),
        createData('Honeycomb@gmail.com', "test5", 3.2, 6.5),
        createData('Ice cream sandwich@gmail.com', "test6", 9.0, 4.3),
        createData('Jelly Bean@gmail.com', "test7", 0.0, 0.0),
        createData('KitKat@gmail.com', "test8", 26.0, 7.0),
        createData('Lollipop@gmail.com', "test9", 0.2,0.0),
        createData('Marshmallow@gmail.com', "test10", 0,2.0),
        createData('Nougat@gmail.com', "test11", 19.0,37.0),
        createData('Oreo@gmail.com', "test12", 18.0,4.0),
      ],
      page: 0,
      rowsPerPage: 5,
    };
  }
  componentDidMount() {
   $.ajax({
    async:false,
     url: 'http://13.126.203.222:3006/email',
     crossDomain:true,
     headers: {'Access-Control-Allow-Origin': '*'},
     success: (apiData)=> {
     let aData = apiData.data.map( (data) =>{
       // console.log(data);
       return createData(data.from, data.subject, data.received, data._id)
      });
      console.log(aData);
      this.setState({
        data: aData
      });
     }
   });
  }
  handleRequestSort = (event, property) => {
    // const orderBy = property;
    // let order = 'desc';

    // if (this.state.orderBy === property && this.state.order === 'desc') {
    //   order = 'asc';
    // }

    // this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  handelMountData(){
    $.ajax({
      async:false,
       url: 'http://13.126.203.222:3006/email',
       crossDomain:true,
       headers: {'Access-Control-Allow-Origin': '*'},
       success: (apiData)=> {
       let aData = apiData.data.map( (data) =>{
         // console.log(data);
         return createData(data.from, data.subject, data.received, data._id)
        });
        console.log(aData);
        this.setState({
          data: aData
        });
       }
     });
  }
  handleDelete = (id) => {
    $.ajax({
      async:false,
      type: 'delete',
       url: 'http://13.126.203.222:3006/email/delete/' + id,
       crossDomain:true,
       headers: {'Access-Control-Allow-Origin': '*'},
       success: (apiData)=> {
        console.log(apiData);
        this.handelMountData();
       }
     });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  showContentDetail = (mdata) =>{
    $.ajax({
      async:false,
       url: 'http://13.126.203.222:3006/email/' +  mdata.carbs,
       crossDomain:true,
       headers: {'Access-Control-Allow-Origin': '*'},
       success: (apiData)=> {
        this.props.onSelectLanguage(apiData.data);
       }
     });
      
  }
  
  handleCreateCase = (email) => {
    const cookies = new Cookies();
    cookies.set('email', email, { path: '/' });
      $.ajax({
        async:true,
         url: 'http://13.126.203.222:3006/user/getUserInfo/'+ email,
        // method: 'post',
         crossDomain:true,
         headers: {'Access-Control-Allow-Origin': '*'},
         success: (a)=> {
           
            console.log(a);

         }
        });
  }
  
  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      //onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} onClick={event => this.handleClick(event, n.id)}/>
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none" onClick={this.showContentDetail.bind(this,n)}>
                        {n.name}
                      </TableCell>
                      <TableCell numeric>{n.calories}</TableCell>
                      <TableCell numeric>{n.fat}</TableCell>
                      <TableCell numeric>
                      <span className="icon">
                      <NavLink to={"createcase/" + n.carbs}>
                      <Tooltip title="Create Case">
                      <Folder onClick={this.handleCreateCase.bind(this, n.name)}/>
                      </Tooltip>
                      </NavLink>
                      </span>
                      <span className="icon">
                      <Tooltip title="Delete" role="button">
                        <Clear onClick={this.handleDelete.bind(this, n.carbs)}/>
                      </Tooltip>
                      </span>
                      
                      </TableCell>
                      {/* <TableCell numeric>{n.protein}</TableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={2} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
