import { Cine } from "../../Interfaces/cine";
import { Card, Text, Container, Input, Button} from "@nextui-org/react";

export const CineCard = (props : any) => {
    const cine : Cine = props.cine

    return (
        <Card variant="bordered" css={{ mw: "400px" }}>
                <Card.Header>
                    <Text>{cine.name}</Text>
                </Card.Header>
                <Card.Image
                    src={cine.img}
                    objectFit="cover"
                    //width="100%"
                    height="100%"
                    alt={cine.name}
                />
        </Card>
    )
};