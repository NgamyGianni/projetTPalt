package com.tpalt.tpalt.service;

import com.tpalt.tpalt.model.Cinema;
import com.tpalt.tpalt.repository.CienamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

@Service
public class CinemaCodeService {

    @Autowired
    private CienamRepository cinoche;

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
