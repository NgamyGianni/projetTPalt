package com.tpalt.tpalt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservation_sequence")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation_sequence {
    @Id
    private String  id;
    private int seq;
}
