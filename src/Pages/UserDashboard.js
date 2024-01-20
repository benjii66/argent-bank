import React from 'react'
import {User} from '../Components/Reducers/features/user/User'
import { Accounts } from '../Components/Accounts/Accounts'

export const UserDashboard = () => {
  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      <User/>
      <Accounts/>
    </main>
  )
}