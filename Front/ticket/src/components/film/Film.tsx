import { useState, useEffect } from "react"
import { Film } from "../../Interfaces/film";
import { Ticket } from "../../Interfaces/ticket";
import { Card, Text, Container, Input, Button } from "@nextui-org/react";
import { usePanier } from "../../contexts/PanierContext";

const FilmCard = (props : any) => {
    const [nbTicket, setNbTicket] = useState<number>(0);
    const {panierVisible,setPanierVisible, panier, setPanier} = usePanier();
    const [init, setInit] = useState<boolean>(false);
    const [score, setScore] = useState<number | undefined>(undefined);   

    const film : Film = props.film;
    const date : Date = props.date;

    console.log(panier);

    const getScore = () =>{
        fetch("http://localhost:8080/init/score/"+film.name)
            .then(response => response.json())
            .then(data => setScore(data))
        ;
    }

    const addPanier = () => {
        if (panier === [])   return [{"film" : film, "count" : nbTicket, "price" : score !== undefined ? score+5 : 13.5, "date" : date}]; 
        return panier.find((e) => e.film === film) ? panier.map((ticket) => { if(ticket.film.name === film.name) return {"film" : ticket.film, "count" : ticket.count+nbTicket, "price" : score !== undefined ? score+5 : 13.5, "date" : date}; else return ticket}) : panier.concat([{"film" : film, "count" : nbTicket, "price" : score !== undefined ? score+5 : 13.5, "date" : date}]);
    }

    const getReduc = () => {
        if(score !== undefined){
            console.log(score)
            console.log(100 - ((score + 5) * 100 / 15))

            return 100 - ((score + 5) * 100 / 15)
        }
        else 0
    }

    useEffect(() => {
        //read
        if(localStorage.length !== 0 && localStorage.getItem("panier") !== null) {
            console.log("reading")
            setPanier(JSON.parse(localStorage.getItem("panier")));
        }
        getScore();
    }, [])

    useEffect(() => {
        //write
        if(panier.length !== 0 || init) localStorage.setItem("panier", JSON.stringify([...panier]));
        setInit(true)
    }, [panier])

    return (
        <Card variant="bordered" css={{ mw: "400px" }}>
            <Card.Header>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}>{film.name}</Text>
            </Card.Header>
            <Card.Image
                src={film.img}
                objectFit="cover"
                //width="100%"
                height="100%"
                alt={film.name}
              />
            <Card.Footer>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>{film.description}</Text>
            </Card.Footer>
            <Card.Footer>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Réduc :  {score !== undefined ? -Math.round(getReduc()) : -10}%</Text>
            </Card.Footer>
            <Card.Footer>
                    <Button onClick={(e) => {if(nbTicket !== 0)  {setPanier(addPanier())}; console.log(panier)}}>Buy Tickets</Button>
                    <Input color="secondary" status="primary" onChange={(e) => setNbTicket(parseInt(e.target.value))} type="number"/>
            </Card.Footer>
        </Card>
    )
};

export const FilmCardContainer = (props : any) => {
    const films = props.films;
    const date : Date = props.date;

    return (
        <Container>
        { films.map((film) =>   <FilmCard date={date} film={film}/>) }
        </Container>
    )
}