import React, { useState, useEffect} from 'react'
import './reservation.css'
import { UserReservation } from '../../Interfaces/userReservation'
import { listReservation } from './listReservation'
import ResversationItem from './ResversationItem'
import QrCodeProvider from '../../contexts/qrcodeContext'
import PopupQrcode from '../../components/PopupQrcode'
import { QRCodeCanvas } from 'qrcode.react'
import { useLogin } from '../../contexts/loginContext'

function Reservation() {
  const {userConnect} = useLogin();

  const [reservationList, setReservationList]=
        useState<UserReservation[]>([]);

  const qrCodeEncoder=(reservation:UserReservation):string =>{
    return "reservation"+reservation.id+reservation.filmName;
  }

  useEffect(()=>{
    fetch(`http://localhost:8080/init/findReservationById/${userConnect.userId}`)
    .then(res => res.json())
    .then(resJson => setReservationList(resJson))
    .catch(err =>console.log("error to get list"))
  },[reservationList]);

  return (
    <div className='reservationTest' style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,46,161,1) 82%, rgba(0,91,110,1) 100%)'
  }}>
    <div className='reservationList'>
      {
        reservationList.map(
            elt=>
            <ul key={elt.id}>
              <QrCodeProvider>
                <ResversationItem reservation={elt} 
                qrCodeLink={qrCodeEncoder(elt)}/>
                <PopupQrcode movieName={elt.filmName}>
                  <QRCodeCanvas
                    className='qr-code'
                    value={qrCodeEncoder(elt)}
                    size={350}
                    bgColor={"#00ffee"}
                    level={"H"}/>
                </PopupQrcode>
              </QrCodeProvider>
            </ul>
          )
      }
    </div>
    </div>
  )
}

export default Reservation