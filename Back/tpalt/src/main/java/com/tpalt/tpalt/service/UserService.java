package com.tpalt.tpalt.service;

import com.tpalt.tpalt.model.Client;
import com.tpalt.tpalt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private SequenceGeneratorService service;


    public boolean register(Client user) {
        System.out.println("Try add User");
        System.out.println("Try Find mail");
        Client u = repository.findUserByMail(user.getMail());
        if (u!=null){
            return false;
        }

        //generate sequence
        user.setId(service.getSequenceNumber(Client.SEQUENCE_NAME));
        System.out.println("SEQUENCE_NAME >>> " + Client.SEQUENCE_NAME);


        user.setPassword(passwordEncoder.encode(user.getPassword()));
        repository.save(user);
        return true;
    }

    public boolean login(Client user) {
        System.out.println("Try Find mail");

        Client u = repository.findUserByMail(user.getMail());
        if (u==null){
            return false;
        }

        Client uBis = user;
        return passwordEncoder.matches(user.getPassword(),u.getPassword());
    }

    public boolean deleteById(int id) {
        System.out.println("Try to Delete User ");

        Optional<Client> u = repository.findById(id);
        if (u.isEmpty()){
            return false;
        }
        repository.deleteById(id);
        System.out.println("User deleted with id : " + id);
        return true;
    }
}
