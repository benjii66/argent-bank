import React from 'react'
import {User} from '../Components/User/User'

export const UserDashboard = () => {
  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      <User/>
    </main>
  )
}