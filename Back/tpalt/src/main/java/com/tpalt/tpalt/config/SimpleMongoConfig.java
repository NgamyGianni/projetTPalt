package com.tpalt.tpalt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SimpleMongoConfig {

//    @Bean
//    public MongoClient mongo() {
//        ConnectionString connectionString = new ConnectionString("mongodb://localhost:27017/test");
//        MongoClientSettings mongoClientSettings = MongoClientSettings.builder()
//                .applyConnectionString(connectionString)
//                .build();
//
//        return MongoClients.create(mongoClientSettings);
//    }
//
//    @Bean
//    public MongoTemplate mongoTemplate() throws Exception {
//        return new MongoTemplate(mongo(), "test");
//    }
}
