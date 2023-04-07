package com.tpalt.tpalt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tpalt.tpalt.model.*;
import com.tpalt.tpalt.repository.CienamRepository;
import com.tpalt.tpalt.repository.ReservationRepository;
import com.tpalt.tpalt.repository.UserRepository;
import com.tpalt.tpalt.service.CinemaCodeService;
import com.tpalt.tpalt.service.ReservationService;
import com.tpalt.tpalt.service.UserService;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.tpalt.tpalt.model.Rating;

import java.util.List;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("init")
public class InitController{

    @Autowired
    private UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CienamRepository cinoche;
    @Autowired
    private UserService userService;
    @Autowired
    private CinemaCodeService cinemaCode;
    @Autowired
    private ReservationService reservationService;
    @Autowired
    private ReservationRepository reservationRepository;


    @PostMapping("/addUser")
    public boolean registerUser(@RequestBody Client user) {
        System.out.println("add User");
       return userService.register(user);
    }


    @PostMapping("/loginUser")
    public String loginUser(@RequestBody Client user) {
        System.out.println("Login");
        return userService.login(user);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteUserById(@PathVariable int id) {
        System.out.println("Delete User ");
        return userService.deleteById(id);
    }

    @GetMapping("/findAllUser")
    public List<Client> findAllUser() {
        System.out.println("findAllUser : ");
        return repository.findAll();
    }


    @GetMapping("/findAllCinoche")
    public List<Cinema> findAllCinoche() {
        System.out.println("findAllCinoche : ");
        return cinoche.findAll();
    }

    @GetMapping("/findUserById/{id}")
    public Optional<Client> findUserById(@PathVariable int id) {
        System.out.println("findUserById : ");
        return repository.findById(id);
    }

    @GetMapping("/seances/{code}")
    public String getSeancesByIdCinema(@PathVariable String code){
        System.out.println("findSeancesById : ");
        String test = "https://cinema.apidae-tourisme.com/api/v001/{id}/seances.json?dateDebut=01-01-2019&dateFin=31-12-2019";
        String uri = test.replace("{id}",code);
        //        uri.replaceFirst("movie",title);
        RestTemplate rest = new RestTemplate();
        String rqBody = rest.getForObject(uri,String.class);

        return rqBody;
    }




    @GetMapping("getCinemaCode")
    public String getCinemaCodes() {
        return cinemaCode.getAllCodes();
    }

//    ArrayList<Score> arrayList = new ArrayList<Score>();
//    @PostMapping("testScore")
//    public void testBisScoreCodes(@RequestBody String jsonString) throws JsonProcessingException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        Score[] ss = objectMapper.readValue(jsonString, Score[].class);
//
//        System.out.println(ss);
//        System.out.println(Arrays.stream(ss).count());
//    }


    @PostMapping("/reservation")
    public boolean addReserve(@RequestBody Reservation reservation) {
        System.out.println("Try reserve");
        return reservationService.reserve(reservation);
    }

    public Optional<Reservation> foudReservation(int id){
        System.out.println("findReservationById >>> ");
        return reservationRepository.findById(id);
    }

    @GetMapping("/findReservationById/{id}")
    public List<Reservation> findReservationsById(@PathVariable int id) {
        System.out.println("Try to findReservationById : ");
        return reservationService.findReservations(id);
    }

    @PostMapping("/findReservation/")
    public String findReservation(@RequestBody Reservation reservation) {
        System.out.println("Try to findReservationById : ");
//        return reservationService.findSpecificReservation(id,userId);
        return reservationService.findSpecificReservation(reservation);
    }


//    @GetMapping("/score/{title}")
//    public String getScoreByTitle(@PathVariable String title) throws JsonProcessingException {
//
//        if(StringUtils.isBlank(title)){
//            // Gérer l'erreur - Le titre est null ou vide
//            return "Error - Le titre du film est null ou vide.";
//        }
//
//        String scoreUrl = "https://www.omdbapi.com/?t={title}&apikey=6e1c3a16";
//        String uri = scoreUrl.replace("{title}",title);
//
//        RestTemplate rest = new RestTemplate();
//        String rqBody = rest.getForObject(uri,String.class);
//        if(rqBody.indexOf("Error")>0){
//            return "Error";
//        }
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        JsonNode rootNode = objectMapper.readTree(rqBody);
//
//        JsonNode imdbRatingNode = rootNode.get("imdbRating");
//        String imdbRating = imdbRatingNode != null ? imdbRatingNode.asText() : null;
//
//        System.out.println(imdbRating); // Output: 6.1
//
//        return imdbRating;
//    }


    @GetMapping("/score/{title}")
    public String getScoreByTitle(@PathVariable String title) throws JsonProcessingException {

        if(StringUtils.isBlank(title)){
            // Gérer l'erreur - Le titre est null ou vide
            return "Error - Le titre du film est null ou vide.";
        }

        String scoreUrl = "https://www.omdbapi.com/?t={title}&apikey=6e1c3a16";
        String uri = scoreUrl.replace("{title}",title);

        RestTemplate rest = new RestTemplate();
        String rqBody = rest.getForObject(uri,String.class);
        if(rqBody.indexOf("Error")>0){
            return "Error";
        }

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(rqBody);

        JsonNode imdbRatingNode = rootNode.get("imdbRating");
        String imdbRating = imdbRatingNode != null ? imdbRatingNode.asText() : null;

        System.out.println(imdbRating); // Output: 6.1

        return imdbRating;
    }





//    @GetMapping("/getReducByFilm/{name}")
//    public int getReducByFilm(@PathVariable String name) throws Exception {
//        System.out.println("Try to getReducByFilm : ");
//        String str = getScoreByTitle(name);
//
//        String json = "{ \"Ratings\": [ { \"Source\": \"Internet Movie Database\", \"Value\": \"7.5/10\" }, { \"Source\": \"Rotten Tomatoes\", \"Value\": \"73%\" }, { \"Source\": \"Metacritic\", \"Value\": \"69/100\" } ] }";
//
//        ObjectMapper objectMapper = new ObjectMapper();
////        Map<String, List<Rating>> map = objectMapper.readValue(json, new TypeReference<Map<String, List<Rating>>>() {});
//        Map<String, List<Rating>> map = objectMapper.readValue(json, new TypeReference<Map<String, List<Rating>>>() {});
//        List<Rating> ratings = map.get("Ratings");
//
//        for (Rating rating : ratings) {
//            System.out.println(rating.getSource() + " : " + rating.getValue());
//        }
//
//        return 0;
//    }

    @GetMapping("/ratings")
    public List<Rating> getRatings() throws Exception {
//        String json = "[{ \"Ratings\": [ { \"Source\": \"Internet Movie Database\", \"Value\": \"7.5/10\" }, { \"Source\": \"Rotten Tomatoes\", \"Value\": \"73%\" }, { \"Source\": \"Metacritic\", \"Value\": \"69/100\" } ] }";
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        List<Rating> ratings = objectMapper.readValue(json, new TypeReference<List<Rating>>() {});
//
//        return ratings;
        String json = "{[{\"Source\": \"Internet Movie Database\", \"Value\": \"7.5/10\"}, {\"Source\": \"Rotten Tomatoes\", \"Value\": \"73%\"}, {\"Source\": \"Metacritic\", \"Value\": \"69/100\"}]}";
        ObjectMapper mapper = new ObjectMapper();
        RatingEnvelope ratingEnvelope = mapper.readValue(json, RatingEnvelope.class);
        List<Rating> ratings = ratingEnvelope.getRatings();
        return ratings;
    }

    @PostMapping("/coco")
    public double test(@RequestBody RatingEnvelope ratingEnvelope){
        System.out.println("************************** ");
        List<Rating> ratings = ratingEnvelope.getRatings();
        double sum = ratings.stream()
                .mapToDouble(rating -> {
                    double value;
                    String valueStr = rating.getValue();
                    if (valueStr.endsWith("%")) {
                        value = Double.parseDouble(valueStr.replaceAll("[^\\d.]+", "")) / 10.0;
                    } else if (valueStr.matches("\\d+\\.\\d+/\\d+")) {
                        String[] parts = valueStr.split("/");
                        double numerator = Double.parseDouble(parts[0].replace(".", "").replace(",", "."));
                        double denominator = Double.parseDouble(parts[1]);
                        value = numerator / denominator;
                    } else if (valueStr.matches("\\d+/\\d+")) {
                        String[] parts = valueStr.split("/");
                        double numerator = Double.parseDouble(parts[0]);
                        double denominator = Double.parseDouble(parts[1]);
                        value = numerator / denominator;
                    } else {
                        value = Double.parseDouble(valueStr);
                    }
                    return value;
                })
                .sum();
        double average = sum / ratings.size();
        System.out.println(average);
        return average * 10 / 7.14107883817 ;
    }

}

