import { FilmCardContainer } from "../components/film/Film";
import { CineCard } from "../components/cinema/CineCard";
import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { Button, Grid } from "@nextui-org/react";
import { cinemaList } from '../components/cinema/Cinemalist';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Companypage = () => {
    const [cine, setCine] = useState(null);
    const idCine = useParams()["id"]?.toString(); //340507

    const getCine = async (id : string | undefined) => {
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

    const getFilms = () : Film => cine !== null ? cine["theater_movies"].map((e) => movieToFilm(e)) : [];

    useEffect(() => {
        getCine(idCine);
    }, [])

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={6}>
                <CineCard cine={cinemaList[0]}/>
            </Grid>
            <Grid xs={6}>
                <FilmCardContainer films={getFilms()} />
            </Grid>
        </Grid.Container>
    )
};

export default Companypage;