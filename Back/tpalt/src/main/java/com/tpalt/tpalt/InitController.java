package com.tpalt.tpalt;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("init")
public class InitController{
//    @GetMapping("/{id}")
//    public int getBook(@PathVariable int id) {
//        return id;
//    }

    @GetMapping("/{title}")
    public String getBook(@PathVariable String title) {
        String uri="http://www.omdbapi.com/?t="+title+"&apikey=6e1c3a16";

//        uri.replaceFirst("movie",title);
        RestTemplate rest = new RestTemplate();
        String rqBody = rest.getForObject(uri,String.class);

        return rqBody;
    }


}
