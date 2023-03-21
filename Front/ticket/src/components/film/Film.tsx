import { useState } from "react"
import { Film } from "../../Interfaces/film";
import { Card, Text, Container, Input, Button } from "@nextui-org/react";
import { useGlobal } from '../../components/Context';

const FilmCard = (props : any) => {
    const [nbTicket, setNbTicket] = useState<number>(0);
    const {userPanier, setUserPanier} = useGlobal();
    
    const film : Film = props.film;

    console.log(userPanier);

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
                    <Button onClick={(e) => {if(nbTicket !== 0)  {
                        setUserPanier(userPanier.set(film, userPanier.get(film) !== undefined ? userPanier.get(film) + nbTicket : nbTicket))
                        console.log(userPanier)
                        }}}>Buy Tickets</Button>
                    <Input onChange={(e) => setNbTicket(parseInt(e.target.value))} underlined type="number"/>
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