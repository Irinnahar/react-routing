import React from 'react';
import User from './User';

class Users extends React.Component {
  state = {
    users : [
      {
        name: 'user 1',
        id: 1
      },
      {
        name: 'user 2',
        id: 2
      },
      {
        name: 'user 3',
        id: 3
      }
    ]
  }
  render() {
    const user  = this.state.users.map(user => {
      return <User name={user.name} id={user.id} key={user.id}/>;
    })

    return(
      <div>
        <h1>Users</h1>
        {user}
      </div>
    )
  }
}
export default Users