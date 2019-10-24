import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      login: 'mojombo',
      avater_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    };
    console.log(123);
  }
  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.state.avater_url}
          className='round-img'
          alt=''
          style={{ width: '60px' }}
        />
      </div>
    );
  }
}

export default UserItem;
