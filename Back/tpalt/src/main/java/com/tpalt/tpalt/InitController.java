package com.tpalt.tpalt;

import com.tpalt.tpalt.model.Cinema;
import com.tpalt.tpalt.model.Client;
import com.tpalt.tpalt.repository.CienamRepository;
import com.tpalt.tpalt.repository.UserRepository;
import com.tpalt.tpalt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

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

    @PostMapping("/addUser")
    public boolean registerUser(@RequestBody Client user) {
        System.out.println("add User");
       return userService.register(user);
    }


    @PostMapping("/loginUser")
    public boolean loginUser(@RequestBody Client user) {
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


    @GetMapping("testcode")
    public String getAllCodes() {
        String result = "";
        try {
            //File myObj = new File(getClass().getResource("cinemaListTest.txt").getFile());

            File file = new ClassPathResource("cinemaListTest.txt").getFile();
            String name = "";
            String lieux = "";
            String id = "";
            boolean add = false;
            int incrementation = 0;
            boolean new_val = false;
            Scanner myReader = new Scanner(file);
            while (myReader.hasNextLine()) {

                String data = myReader.nextLine();
                if (data.contains("row")) {
                    new_val = true;
                    continue;
                }
                if (new_val) {
                    add = false;
                    String value = data.substring(data.indexOf("\">") +2);
                    value = value.substring(0, value.indexOf("<"));
                    switch (incrementation) {
                        case 0:
                            name = value;
                            break;
                        case 1:
                            lieux = value;
                            break;
                        case 2:
                            id = value;
                            new_val = false;
                            add = true;
                            break;


                    }
                    incrementation += 1;

                }
                if (add) {
                    StringBuilder res = new StringBuilder();
                    String lieu  = lieux.substring(lieux.indexOf("("));
                    String codePostal = lieux.substring(lieux.indexOf("(")+1,lieux.indexOf(')'));
                    String url = "https://source.unsplash.com/random/?"+name;
                    Cinema cine = new Cinema(Integer.parseInt(id),name,lieux,codePostal, url);
                    cinoche.save(cine);
                    //String splitValue[] = lieux.split("");
                    res.append(name).append("\n");
                    res.append(lieux).append("\n");
                    res.append(id).append("\n");
                    res.append("-----------------------------");

                    result += res.toString();
                    add = false;
                    incrementation = 0;
                }

                System.out.println(data);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return result;
    }


}
