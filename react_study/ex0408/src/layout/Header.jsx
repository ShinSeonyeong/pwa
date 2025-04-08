import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <h2><Link to="/">홈</Link></h2>
        <h2><Link to="/lotto">로또</Link></h2>
    </div>
  )
}

export default Header