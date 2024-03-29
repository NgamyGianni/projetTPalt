import { FilmCardContainer } from "../components/film/Film";
import { CineCard } from "../components/cinema/CineCard";
import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { Ticket } from "../Interfaces/ticket";
import { Grid } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLogin } from '../contexts/loginContext';
import { Button } from '@nextui-org/react';

const Companypage = () => {
    const [cine, setCine] = useState(null);
    const [films, setFilms] = useState<Array<Film>>([]);
    const idCine = useParams()["id"]?.toString(); //340507
    const {userConnect, setUserConnect} = useLogin();
    const [day, setDay] = useState(1);
    const today = new Date();

    const getCine = (id : string | undefined) => {
        fetch("http://localhost:8080/init/seances/"+id)
            .then(response => response.json())
            .then(data => setCine(data))
        ;
    }

    const movieToFilm = (movie : any) : Film => {
        return {
            cinema : toCine(cine),
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

    const getFilms = (start : number, end : number) : Film => cine !== null ? cine["theater_movies"].slice(start, end).map((e) => movieToFilm(e)) : [];

    const dayToString = (date : Date) => date.getMonth()+1 < 10 ? date.getDate() + "/0" + (date.getMonth()+1) + "/" + date.getFullYear() : date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()

    const addDays = (date: Date, days: number): Date => {
        const tmpdate = new Date()
        tmpdate.setDate(tmpdate.getDate() + days);
        return tmpdate;
    }

    useEffect(() => {
        getCine(idCine);
    }, [])

    return (
        <Grid.Container style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,46,161,1) 82%, rgba(0,91,110,1) 100%)'
    }}>
            <Grid xs={6}>
                { cine ? 
                    <CineCard cine={toCine(cine)}/>
                    :
                    ""
                }
            </Grid>
            <Grid>
                <Button.Group color="gradient">
                    <Button ghost={day !== 1} onClick={(e) => setDay(1)}>{dayToString(today)}</Button>
                    <Button ghost={day !== 2} onClick={(e) => setDay(2)}>{dayToString(addDays(today, 1))}</Button>
                    <Button ghost={day !== 3} onClick={(e) => setDay(3)}>{dayToString(addDays(today, 2))}</Button>
                </Button.Group>
                {day === 1 ? <FilmCardContainer date={today} films={getFilms(0, 5)} /> : ""}
                {day === 2 ? <FilmCardContainer date={addDays(today, 1)} films={getFilms(6, 11)} /> : ""}
                {day === 3 ? <FilmCardContainer date={addDays(today, 2)} films={getFilms(12, 17)} /> : ""}
            </Grid>
        </Grid.Container>
    )
};

export default Companypage;