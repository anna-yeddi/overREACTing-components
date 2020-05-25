import React from 'react'
import UserProfile from './components/UserProfile'
import UserProfileClassBased from './components/UserProfileClassBased'
import User from './models/User'
import logo from './logo.svg'
import './App.css'

function App() {
  const user = new User({
    name: 'Jane Doe',
    status: 'Developer',
    online: true,
    avatar: logo,
    hobbies: ['JS', 'Frontend', 'React'],
  })

  return (
    <div className="App">
      <UserProfile user={user} />
      <hr />
      <UserProfileClassBased user={user} />
    </div>
  )
}

export default App
