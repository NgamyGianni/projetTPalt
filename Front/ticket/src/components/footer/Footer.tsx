import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <footer className='footer'>
      <div className='description-footer'>
          <div className='partner'>Nos partenaire</div>
          <div className='links'>
            <Link to="" className='link'>Liste cinéma</Link>
            <Link to="" className='link'>Contact Us</Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer