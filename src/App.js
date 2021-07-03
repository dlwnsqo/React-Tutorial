import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Customer from './components/customer';

var customer = [{
  id: 1,
  image: 'https://placeimg.com/256/256/1',
  name: '홍길동',
  birthday: '970910',
  gender: '남자'
},
{
  id: 2,
  image: 'https://placeimg.com/256/256/2',
  name: '홍길동2',
  birthday: '970920',
  gender: '남자'
},
{
  id: 3,
  image: 'https://placeimg.com/256/256/3',
  name: '홍길동3',
  birthday: '970930',
  gender: '남자'
}

]

class App extends Component{
  render(){
    return(
      <div>
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
export default App;
