package com.tpalt.tpalt.repository;

import com.tpalt.tpalt.model.Cinema;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CienamRepository extends MongoRepository<Cinema,Integer> {
}
