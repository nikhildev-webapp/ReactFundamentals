import React from 'react'

const UserList = () => {
    const userList = [
        'Nikhil',
        'Vipul',
        'Harsh',
        'Inderjeet',
        'Vinay',
        'Jitu'
    ]
  return (
      <>
          <h1>UserList</h1>
          <ul>
              {userList.map((user,index) => (
                  <li key={index}>Hello User:{user}</li>
              ))}
          </ul>
      </>
  )
}

export default UserList