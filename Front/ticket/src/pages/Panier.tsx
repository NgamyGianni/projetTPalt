import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "../components/Context";
import { Card, Button, Text } from "@nextui-org/react";


const Panier = () => {
    const {userPanier, setUserPanier} = useGlobal();

    useEffect(() => {
        if(userPanier.size === 0 && localStorage.getItem("panier") !== null)    setUserPanier(new Map(JSON.parse(localStorage.getItem("panier"))))
    }, [])

    const removeItem = (film : Film) => {
        const tmp : Map<Film, number> = new Map(userPanier)
        tmp.delete(film)
        setUserPanier(new Map(tmp))
        console.log(new Map(tmp))
        const panierJson = JSON.stringify([...userPanier])
        console.log(panierJson)
        console.log(new Map(JSON.parse(localStorage.getItem("panier"))))
        localStorage.setItem("panier", panierJson)
        console.log(new Map(JSON.parse(localStorage.getItem("panier"))))
    }

    const ticket = (film : Film) => {
        return (
            <div>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}} >{film.name}</Text>
                <Text color="primary">Quantity : {userPanier.get(film)}</Text>
                <Text color="primary">Price : 10</Text>
                <Button onClick={(e) => removeItem(film)}>Cancel</Button>
            </div>
        )
    }

    return (
        <Card>
            <Card.Header>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Panier</Text>
            </Card.Header>
            <Card.Body>
                {userPanier.size !== 0 ? Array.from(userPanier.keys()).map((film : Film) => ticket(film)) : ""}
            </Card.Body>
            <Card.Footer>
                <Button onClick={(e) => console.log(userPanier)}>Pay</Button>
            </Card.Footer>
        </Card>
    )
}

export default Panier;