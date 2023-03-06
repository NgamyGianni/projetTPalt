package com.tpalt.tpalt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class TpaltApplication {

	public static void main(String[] args) {
		SpringApplication.run(TpaltApplication.class, args);
	}

}