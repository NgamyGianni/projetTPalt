import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "../components/Context";
import { Card, Button, Text } from "@nextui-org/react";


const Panier = () => {
    const {userPanier, setUserPanier} = useGlobal();

    const ticket = (film : Film) => {
        
        return (
            <div>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}} >{film.name}</Text>
                <Text color="primary">Quantity : {userPanier.get(film)}</Text>
                <Text color="primary">Price : 10</Text>
                <Button onClick={userPanier.has(film)?.delete(film)}>Cancel</Button>
            </div>
        )
    }

    return (
        <Card>
            <Card.Header>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Panier</Text>
            </Card.Header>
            <Card.Body>
                {Array.from(userPanier.keys()).map((film : Film) => ticket(film))}
            </Card.Body>
        </Card>
    )
}

export default Panier;