import React from 'react'
import Login from './Login'
import Logout from './Logout'

export default function Profile() {
  return (
    <div className='outline center'>
        <h1>Profile</h1>
        <Login />
        <Logout />
    </div>
  )
}
