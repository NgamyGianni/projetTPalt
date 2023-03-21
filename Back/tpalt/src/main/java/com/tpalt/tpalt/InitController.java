package com.tpalt.tpalt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tpalt.tpalt.model.*;
import com.tpalt.tpalt.repository.CienamRepository;
import com.tpalt.tpalt.repository.ReservationRepository;
import com.tpalt.tpalt.repository.UserRepository;
import com.tpalt.tpalt.service.CinemaCodeService;
import com.tpalt.tpalt.service.ReservationService;
import com.tpalt.tpalt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

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

    @GetMapping("/score/{title}")
    public String getScoreByTitle(@PathVariable String title){

        String scoreUrl = "https://www.omdbapi.com/?t={title}&apikey=6e1c3a16";
        String uri = scoreUrl.replace("{title}",title);

        RestTemplate rest = new RestTemplate();
        String rqBody = rest.getForObject(uri,String.class);
        if(rqBody.indexOf("Error")>0){
            return "Error";
        }
        String test = rqBody.substring(rqBody.indexOf("\"Ratings"));
        test = test.substring(0,test.indexOf("]"));

        return test;
    }


    @GetMapping("getCinemaCode")
    public String getCinemaCodes() {
        return cinemaCode.getAllCodes();
    }

    ArrayList<Score> arrayList = new ArrayList<Score>();
    @PostMapping("testScore")
    public void testBisScoreCodes(@RequestBody String jsonString) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        Score[] ss = objectMapper.readValue(jsonString, Score[].class);

        System.out.println(ss);
        System.out.println(Arrays.stream(ss).count());
    }

    @PostMapping("testBisScore")
    public void testScoreCodes(@RequestBody String jsonString) throws JsonProcessingException {

//        ObjectMapper objectMapper = new ObjectMapper();
//        RatingsClass ratingsClass = objectMapper.readValue(jsonString, RatingsClass.class);

        ObjectMapper objectMapper = new ObjectMapper();
        RatingsClass ss = objectMapper.readValue(jsonString, RatingsClass.class);

        System.out.println(ss);
//        System.out.println(Arrays.stream(ss).count());
    }

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

}

