import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './home.style'

export const HomePage: React.VFC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <NavBar>
        <Link to={'/contacts'}>Contacts Page</Link>
      </NavBar>
    </div>
  )
}
