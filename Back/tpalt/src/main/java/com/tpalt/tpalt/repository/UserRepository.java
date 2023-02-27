package com.tpalt.tpalt.repository;

import com.tpalt.tpalt.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<Client,Integer> {
    @Query("{mail:'?0'}")
    Client findUserByMail(String username);
}
