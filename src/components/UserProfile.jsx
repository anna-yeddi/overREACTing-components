import React from 'react'
import propTypes from 'prop-types'
import User from '../models/User'
import './user-profile.css'

export default function UserProfile({ user }) {
  return (
    <>
      <h1>{`You're signed in as ${user.name}`}</h1>
      <p>{user.status}</p>
      <p>{user.online ? 'online' : null}</p>
      <img src={user.avatar} alt="User logo" width={50} height="50" />
      <ul>
        {user.hobbies.map((hobby) => (
          <li key={hobby} className="user-profile__hobby">
            {hobby}
          </li>
        ))}
      </ul>
    </>
  )
}

UserProfile.propTypes = {
  user: propTypes.instanceOf(User),
}

// UserProfile.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     status: PropTypes.string,
//     online: PropTypes.bool,
//     avatar: PropTypes.string,
//     hobbies: PropTypes.arrayOf(PropTypes.string),
//   }),
// }
