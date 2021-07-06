import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Customer from './components/customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1000
  }
})

var customer = [{
  id: 1,
  image: 'https://placeimg.com/128/128/1',
  name: '홍길동',
  birthday: '970910',
  gender: '남자'
},
{
  id: 2,
  image: 'https://placeimg.com/128/128/2',
  name: '홍길동2',
  birthday: '970920',
  gender: '남자'
},
{
  id: 3,
  image: 'https://placeimg.com/128/128/3',
  name: '홍길동3',
  birthday: '970930',
  gender: '남자'
}

]

class App extends Component{
  render(){
    const {classes}=this.props;
    return(
      <Paper class={classes.root}>
        <Table class={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {
            customer.map(c => {
              return (
                <Customer
                  key = {c.id}
                  id= {c.id}
                  image={c.image}
                  name = {c.name}
                  birthday = {c.birthday}
                  gender = {c.gender}
               />
              );
           })
          }
          </TableBody>
        </Table>
      </Paper>
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
