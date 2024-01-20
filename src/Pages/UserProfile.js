import React from 'react'
import { UpdateUserProfileForm } from '../Components/Profile/UpdateUserProfileForm'


export const UserProfile = () => {
  return (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <UpdateUserProfileForm/>
    </section>
    </main>    
  )
}
