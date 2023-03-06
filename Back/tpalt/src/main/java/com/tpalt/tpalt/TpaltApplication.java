package com.tpalt.tpalt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@EnableWebSecurity
public class TpaltApplication {

	public static void main(String[] args) {
		SpringApplication.run(TpaltApplication.class, args);
	}

}