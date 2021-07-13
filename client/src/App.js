//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Customer from './components/customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import CustomerAdd from './components/CustomerAdd';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1000
  }
});


class App extends Component{

  constructor(props){
    super(props)
      this.state = {
        customers: '',
        completed: 0
      }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  
  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const {classes}=this.props;
    return(
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
            {
              this.state.customers ? this.state.customers.map(c => {
                return (
                  <Customer stateRefresh={this.stateRefresh}
                    key = {c.id}
                    id= {c.id}
                    image={c.image}
                    name = {c.name}
                    birthday = {c.birthday}
                    gender = {c.gender}
                />
                );
            }) : ""
            }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh = {this.stateRefresh}/>
      </div>
    )
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default withStyles(styles)(App);
