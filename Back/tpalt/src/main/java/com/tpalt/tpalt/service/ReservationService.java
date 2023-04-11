package com.tpalt.tpalt.service;

import com.tpalt.tpalt.model.Reservation;
import com.tpalt.tpalt.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private SequenceGeneratorService resevationGenerator;

    public boolean reserve(Reservation reservation){
        System.out.println("Try add Reservation");
        reservation.setId(resevationGenerator.getSequenceNumber(Reservation.SEQUENCE_NAME));
        reservationRepository.save(reservation);
        return true;
    }

    public List<Reservation> findReservations(int id){
        System.out.println("findReservationById >>> ");
        return reservationRepository.findResarvationByUserId(id);
    }

    public String findSpecificReservation(Reservation reservation){
        System.out.println("findReservationById >>> ");

        Reservation optionalReservation= reservationRepository.findResarvation(reservation.getId(),reservation.getUserId());

        if(optionalReservation == null){
            return "error";
        }

        if (!optionalReservation.isState()){
            optionalReservation.setState(true);
            reservationRepository.save(optionalReservation);
            System.out.println(optionalReservation);
            return optionalReservation.getFilmName();
        }

        return "error";
    }
}
