package com.tpalt.tpalt.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Document(collection = "User")
public class Client {

    @Transient
    public static final String SEQUENCE_NAME = "user_sequence";

    @Id
    private int id;

    private String mail;
    private String password;

    private String firstName;
    private String lastName;


}
