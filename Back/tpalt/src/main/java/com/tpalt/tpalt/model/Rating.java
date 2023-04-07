package com.tpalt.tpalt.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class Rating {
    @JsonProperty("Source")
    private String Source;
    @JsonProperty("Value")
    private String Value;

}
