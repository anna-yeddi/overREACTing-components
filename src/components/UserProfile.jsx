import React from 'react'
import logo from '../logo.svg'
import './user-profile.css'

export default function UserProfile() {
  const user = {
    name: 'Jane Doe',
    status: 'Developer',
    online: true,
    avatar: logo,
    hobbies: ['JS', 'Frontend', 'React'],
  }

  // const hobbyStyles = {
  //   display: 'inline',
  //   marginRight: 15,
  //   borderRadius: 5,
  //   backgroundColor: 'teal',
  //   color: 'white',
  //   padding: 5,
  //   listStyleType: 'arabic-indic',
  //   textAlign: 'left',
  // }

  return (
    <>
      <h1>{`You're signed in as ${user.name}`}</h1>
      <p>{user.status}</p>
      <p>{user.online ? 'online' : null}</p>
      <img src={user.avatar} alt="User logo" width={50} height="50" />
      <ul>
        {user.hobbies.map((hobby) => (
          <li className="user-profile__hobby">{hobby}</li>
        ))}
      </ul>
    </>
  )
}
