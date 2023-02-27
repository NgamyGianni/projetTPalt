import { Film } from "../../Interfaces/film";
import { Card, Text } from "@nextui-org/react";

const FilmCard = (props : any) => {
    const film : Film = props.film;

    return (
        <Card variant="bordered" css={{ mw: "400px" }}>
            <Card.Header>
                <Text>{ film.name} </Text>
            </Card.Header>
            <Card.Image
                src={film.img}
                objectFit="cover"
                //width="100%"
                height="100%"
                alt={film.name}
              />
            <Card.Footer>
                <Text>{film.description}</Text>
            </Card.Footer>
        </Card>
    )
};

export default FilmCard;