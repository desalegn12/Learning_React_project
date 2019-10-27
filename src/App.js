import React, { Component } from 'react';
import Navbar from './components/layout/Navigation';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }
  render() {
    /*const name = 'Jhone Deo';
    const foo = function() {
      return 'hello foo';
    };
    /*this function can be write as 
    const bar = () => 'hello foo';
    const loading = true;
    if (loading ) {
      return 'loading...';
    }*/
    return (
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
    /*React.createElement(
      'div',
      { className: 'app' },
      React.createEleme.nt('h1', null, 'Hello from react')
    );

    /*class must be written as className instead of class it self 
    */
    /*<div className='App'>
        <h1>
          Hello {name.toUpperCase() + bar() + ' ' + foo().toUpperCase()} from
          the react.
        </h1>
        <h2>Good By for today</h2>
      </div>
    );
    /*the other requirment is any html tag must be inside the the div tag*/
  }
}

export default App;
