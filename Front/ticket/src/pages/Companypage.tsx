import { FilmCardContainer } from "../components/film/Film";
import { CineCard } from "../components/cinema/CineCard";
import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { Button, Grid } from "@nextui-org/react";
import { cinemaList } from '../components/cinema/Cinemalist';
import { useState, useEffect } from "react";

const Companypage = () => {

    const getCine = async (id : string) => {
        await fetch("http://localhost:8080/init/seances/"+id)
            .then(response => response.json())
            .then(data => setCine(data))
        ;
    }

    const movieToFilm = (movie : any) => {
        return {
            name : movie["title"],
            img : movie["posters"]["large"],
            description : movie["synopsis"],
            nb_place : 2,
            available_place : 1,
            date : ""
        }
    }

    const getFilms = () : Film => {
        if(cine != null){
            const f = cine["theater_movies"];

            return f.map(
                (e) => movieToFilm(e)
            )
        }
        
        return [{
            name : "",
            img : "",
            description : "",
            nb_place : 0,
            available_place : 0,
            date : ""
        }];
    }

    const [cine, setCine] = useState(null);

    useEffect(() => {
        getCine("340507");
    }, [])

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={6}>
                <CineCard cine={cinemaList[0]}/>
            </Grid>
            <Grid xs={6}>
                <FilmCardContainer films={getFilms()} />
             </Grid>
             <Button onClick={(e) => console.log(getFilms())}>cine !</Button>
        </Grid.Container>
    )
};

export default Companypage;