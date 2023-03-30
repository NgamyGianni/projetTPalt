import React,{useState} from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { UserReservation } from '../../Interfaces/userReservation'
import { useQrcode} from '../../contexts/qrcodeContext'


interface DataReservation{
    reservation:UserReservation, 
    qrCodeLink:string
}
function ResversationItem({reservation,qrCodeLink}:DataReservation) {
  const colorBox ={
    backgroundColor:reservation.state?'green':'black',
  };
  const {visibleQRcode, setVisibleQRcode} = useQrcode();
  const display=():void => setVisibleQRcode(!visibleQRcode);
  
  return (
    
      <div className='reservation-item'>
        <div className='qr-code'> 
          <QRCodeCanvas
            className='qr-code'
            value={qrCodeLink}
            size={170}
            bgColor={"#00ffee"}
            level={"H"}
            onClick={display}
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
                style={colorBox}> </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default ResversationItem