import React from 'react'
import { cinemaList } from '../../components/cinema/Cinemalist'
import './reservation.css'
function Reservation() {
  return (
    <div className='reservationList'>
      <div className='reservation-item'>
        <div className='qr-code'> Qr Code</div>
        <div className='ticket-details'>
          <div className='movie-name'> SpiderMan</div>
          <div className='detailled-movie'> 
            <img  src={cinemaList[0].img} alt="" />
            <div className='state-movie'></div>
          </div>
          <div className='displaying-date'> SpiderMan</div>
        </div>
      </div>
      
    </div>
  )
}

export default Reservation