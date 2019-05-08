import React from 'react';
import useResources from './useResources'

const UserList = () => {
  const users = useResources('users')
  return ( <ul>
    {users.map(user => user.name)}
  </ul> );
}
 
export default UserList;
