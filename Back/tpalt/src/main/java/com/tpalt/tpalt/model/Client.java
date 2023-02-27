package com.tpalt.tpalt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Document(collection = "User")
public class Client {
    @Id
    private int id;

    private String mail;
    private String password;

    private String firstName;
    private String lastName;


}
