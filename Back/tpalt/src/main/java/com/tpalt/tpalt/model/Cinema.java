package com.tpalt.tpalt.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@AllArgsConstructor
@Document(collection = "Cinema")
public class Cinema {

    @Id
    private int id;

    private String name;
    private String lieu;
    private String codePostal;
    private String url;

}
