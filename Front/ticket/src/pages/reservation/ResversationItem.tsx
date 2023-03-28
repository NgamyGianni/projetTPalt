import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { UserReservation } from '../../Interfaces/userReservation'
interface DataReservation{
    reservation:UserReservation, 
    qrCodeLink:string
}
function ResversationItem({reservation,qrCodeLink}:DataReservation) {
  const colorBox ={
    color:reservation.state?'green':'black',
  };
  return (
    <div className='reservation-item'>
        <div className='qr-code'> 
          <QRCodeCanvas
            className='qr-code'
            value={qrCodeLink}
            size={170}
            bgColor={"#00ffee"}
            level={"H"}
          />
        </div>
        <div className='ticket-details'>
          <div className='detailled-movie'> 
            <img  src={reservation.filmLink} alt={reservation.filmName} />
            <div className='movie-name'> {reservation.filmName}</div>
          </div>
          <div className='descr-show'>
            <div className='ticket-number'> 
              Numéro ticket : {reservation.id}
            </div>
            <div className='displaying-date'> 
              Date Séance : {reservation.date}
            </div>
            <div className='displaying-time'> 
              Heure : {reservation.date}
            </div>
            <div className='state-movie'>
                <div className='status-text'>Status</div>
                <div className='state-block' 
                style={{backgroundColor:reservation.state?'blue':'black'}}> </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default ResversationItem