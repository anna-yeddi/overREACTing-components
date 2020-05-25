import React from 'react'
import logo from '../logo.svg'
import './user-profile.css'
import PropTypes from 'prop-types'

export default function UserProfile(props) {
  const { user } = props
  // const user = {
  //   name: 'Jane Doe',
  //   status: 'Developer',
  //   online: true,
  //   avatar: logo,
  //   hobbies: ['JS', 'Frontend', 'React'],
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

UserProfile.PropTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    online: PropTypes.bool,
    avatar: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
  }),
}
