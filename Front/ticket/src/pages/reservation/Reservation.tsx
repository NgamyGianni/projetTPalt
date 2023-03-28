import React, { useState, useEffect} from 'react'
import './reservation.css'
import { UserReservation } from '../../Interfaces/userReservation'
import { listReservation } from './listReservation'
import { useLogin } from '../../contexts/loginContext'
import ResversationItem from './ResversationItem'


function Reservation() {

  const {userConnect}= useLogin();

  const [reservationList, setReservationList]=
        useState<UserReservation[]>(listReservation);

  const qrCodeEncoder=(reservation:UserReservation):string =>{
    return "reservation"+reservation.id+reservation.filmName;
  }

  // useEffect(()=>{
  //   fetch(`http://localhost:8080/init/findReservationById/${userConnect.userId}`)
  //   .then(res => res.json())
  //   .then(resJson => setReservationList(resJson))
  //   .catch(err =>console.log("error to get list"))
  // },[reservationList]);

  return (
    <div className='reservationList'>
      {
        reservationList.map(
            elt=>
            <ul key={elt.id}>
              <ResversationItem reservation={elt} 
              qrCodeLink={qrCodeEncoder(elt)}/>
            </ul>
          )
      }
    </div>
  )
}

export default Reservation