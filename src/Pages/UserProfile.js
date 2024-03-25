import React from 'react'
import { UpdateUserProfileForm } from '../Components/Profile/UpdateUserProfileForm'


export const UserProfile = () => {
  return (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon" aria-hidden="true"/>
        <UpdateUserProfileForm/>
    </section>
    </main>    
  )
}
