package com.tpalt.tpalt.repository;

import com.tpalt.tpalt.model.Client;
import com.tpalt.tpalt.model.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository  extends MongoRepository<Reservation,Integer> {

    @Query("{'userId':?0}")
    List<Reservation> findResarvationByUserId(int id);

    @Query("{'id':?0},{'userId':?0}")
    Reservation findResarvation(int id,int userId);
}
