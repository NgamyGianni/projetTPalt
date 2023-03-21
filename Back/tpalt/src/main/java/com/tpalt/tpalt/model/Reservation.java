package com.tpalt.tpalt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Document(collection = "Reservation")
public class Reservation {
    @Transient
    public static final String SEQUENCE_NAME = "reservation_sequence";

    @Id
    private int id;

    private boolean state;
    private int userId;
    private String date;
    private int idCinema;
    private String filmName;
}
