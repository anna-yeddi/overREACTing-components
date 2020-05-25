import React from 'react'
import UserProfile from './components/UserProfile'
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
      <UserProfile user={user}></UserProfile>
    </div>
  )
}

export default App
