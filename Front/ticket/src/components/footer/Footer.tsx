import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <footer className='footer'>
      <div className='description-footer'>
          <div className='footer-left'>
            <p>Parténaires Cinémas</p>
            <div className='links'>
              <Link to="" >Liste cinéma</Link>
              {/* <Link to="">Liste cinéma</Link>
              <Link to="">Liste cinéma</Link> */}
            </div>
          </div>
          <div className='footer-right'>
            <Link to="" className='.link'>Contact us</Link>
          </div>
      </div>
      
    </footer>
  )
}

export default Footer