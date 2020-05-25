import React from 'react'
import propTypes from 'prop-types'
import User from '../models/User'
import './user-profile.css'

export default class UserProfileClassBased extends React.Component {
  static propTypes = {
    user: propTypes.instanceOf(User),
  }

  render() {
    const { user } = this.props

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
}

// UserProfileClassBased.propTypes = {
//   user: propTypes.instanceOf(User),
// }
