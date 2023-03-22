import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { Ticket } from "../Interfaces/ticket";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Text } from "@nextui-org/react";

const Panier = () => {
    const [panier, setPanier] = useState<Array<Ticket> | undefined>(undefined);

    useEffect(() => {
        if(panier !== undefined) localStorage.setItem("panier", JSON.stringify([...panier]));
    }, [panier])

    useEffect(() => {
        if(localStorage.length !== 0 && localStorage.getItem("panier") !== null) setPanier(JSON.parse(localStorage.getItem("panier")));
        console.log(panier)
    }, [])

    console.log(panier)

    const removePanier = (ticket : Ticket) => {
        return panier?.filter((element : Ticket) => element !== ticket)
    }

    const line = (ticket : Ticket) => {
        return (
            <div>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}} >{ticket.film.name}</Text>
                <Text color="primary">Quantity : {ticket.count}</Text>
                <Text color="primary">Price : 10</Text>
                <Button onClick={(e) => setPanier(removePanier(ticket))}>Cancel</Button>
            </div>
        )
    }

    return (
        <Card>
            <Card.Header>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Panier</Text>
            </Card.Header>
            <Card.Body>
                {panier?.length !== 0 ? panier?.map((ticket : Ticket) => line(ticket)) : ""}
            </Card.Body>
            <Card.Footer>
                <Button onClick={(e) => console.log(panier)}>Pay</Button>
            </Card.Footer>
        </Card>
    )
}

export default Panier;