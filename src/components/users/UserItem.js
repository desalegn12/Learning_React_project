import React from 'react';

const UserItem = props => {
  /*constructor() {
    super();
    this.state = {
      id: 1,
      login: 'desalegn12',
      avater_url:
        'https://avatars0.githubusercontent.com/u/39537919?s=400&u=fa12e7198cea3e779b4897db270335f316b38027&v=4',
      html_url: 'https://github.com/desalegn12'
    };
    console.log(123);
  }*/

  const { login, avater_url, html_url } = props.users;
  return (
    <div className='card text-center'>
      <img
        src={avater_url}
        className='round-img'
        alt=''
        style={{ width: '60px' }}
      />
      <div>
        <h3>{login}</h3>
      </div>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>

    //the inline stylesheet use double curly brace and cammelcase inatead of dash
  );
};

export default UserItem;
