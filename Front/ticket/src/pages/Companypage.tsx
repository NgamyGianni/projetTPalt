import { FilmCardContainer } from "../components/film/Film";
import { CineCard } from "../components/cinema/CineCard";
import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { Ticket } from "../Interfaces/ticket";
import { Grid } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Companypage = () => {
    const [cine, setCine] = useState(null);
    const [films, setFilms] = useState(undefined);
    const idCine = useParams()["id"]?.toString(); //340507

    const getCine = (id : string | undefined) => {
        fetch("http://localhost:8080/init/seances/"+id)
            .then(response => response.json())
            .then(data => setCine(data))
        ;
    }

    const movieToFilm = (movie : any) : Film => {
        return {
            name : movie["title"],
            img : "https://cinema.apidae-tourisme.com"+movie["posters"]["medium"],
            description : movie["synopsis"],
            nb_place : 2,
            available_place : 1,
            date : ""
        }
    }

    const toCine = (cine : any) : Cine => {
        return {
            name : cine["theater_name"],
            img : "https://source.unsplash.com/random/?movie theater"
        }
    }

    const getFilms = (n : number) : Film => cine !== null ? cine["theater_movies"].slice(0, n).map((e) => movieToFilm(e)) : [];

    useEffect(() => {
        getCine(idCine);
    }, [])

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={6}>
                { cine ? 
                    <CineCard cine={toCine(cine)}/>
                    :
                    ""
                }
            </Grid>
            <Grid xs={6}>
                <FilmCardContainer films={getFilms(5)} />
            </Grid>
        </Grid.Container>
    )
};

export default Companypage;