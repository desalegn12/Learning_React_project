import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    user: [
      {
        id: 1,
        login: 'desalegn12',
        avater_url:
          'https://avatars0.githubusercontent.com/u/39537919?s=400&u=fa12e7198cea3e779b4897db270335f316b38027&v=4',
        html_url: 'https://github.com/desalegn12'
      },
      {
        id: 2,
        login: 'defunkt',
        avater_url: 'https://avatars0.githubusercontent.com/u/2?v=4',

        html_url: 'https://github.com/defunkt'
      },
      {
        id: 3,
        login: 'wycats',
        avater_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
        html_url: 'https://github.com/wycats'
      },
      {
        id: 4,
        login: 'pjhyett',
        avater_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.user.map(user => (
          <UserItem key={user.id} users={user} /> //this renders the all the user
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Users;
