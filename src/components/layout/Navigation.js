import React, { Component } from 'react';

export class Navigation extends Component {
  static defaultProp = {
    title: 'Github Finder',
    icon: 'fab faa-github'
  };
  render() {
    return (
      <div className='navbar bg-primary' id='fixed-nav-bar'>
        <h1> Navbar</h1>
      </div>
    );
  }
}

export default Navigation;
