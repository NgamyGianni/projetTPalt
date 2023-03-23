import { useState, useEffect } from "react"
import { Film } from "../../Interfaces/film";
import { Ticket } from "../../Interfaces/ticket";
import { Card, Text, Container, Input, Button } from "@nextui-org/react";

const FilmCard = (props : any) => {
    const [nbTicket, setNbTicket] = useState<number>(0);
    const [panier, setPanier] = useState<Array<Ticket> | undefined>(undefined);
    
    const film : Film = props.film;

    console.log(panier);

    const addPanier = () => {
        if (panier === undefined)   return [{"film" : film, "count" : nbTicket, "price" : 10}]; 
        return panier.find((e) => e.film === film) ? panier.map((ticket) => { if(ticket.film.name === film.name) return {"film" : ticket.film, "count" : ticket.count+nbTicket, "price" : 10}; else return ticket}) : panier.concat([{"film" : film, "count" : nbTicket, "price" : 10}]);
    }

    useEffect(() => {
       if(localStorage.length !== 0 && localStorage.getItem("panier") !== null) setPanier(JSON.parse(localStorage.getItem("panier")));
    }, [])

    useEffect(() => {
        if(panier !== undefined) localStorage.setItem("panier", JSON.stringify([...panier]));
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
                    <Button onClick={(e) => {if(nbTicket !== 0)  {setPanier(addPanier())}}}>Buy Tickets</Button>
                    <Input color="secondary" status="primary" initialValue={1} onChange={(e) => setNbTicket(parseInt(e.target.value))} type="number"/>
            </Card.Footer>
        </Card>
    )
};

export const FilmCardContainer = (props : any) => {
    const films = props.films;

    return (
        <Container>
        { films.map((film) =>   <FilmCard film={film}/>) }
        </Container>
    )
}