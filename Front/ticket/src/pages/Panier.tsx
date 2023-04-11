import { Film } from "../Interfaces/film";
import { Cine } from "../Interfaces/cine";
import { Ticket } from "../Interfaces/ticket";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Text, Modal } from "@nextui-org/react";
import { Reservation } from "../Interfaces/reservation";
import { usePanier } from '../contexts/PanierContext';
import { useLogin } from '../contexts/loginContext';

const Panier = () => {
    const {panierVisible,setPanierVisible, panier, setPanier} = usePanier();
    const {userConnect, setUserConnect} = useLogin();
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        //read
        if(localStorage.length !== 0 && localStorage.getItem("panier") !== null) setPanier(JSON.parse(localStorage.getItem("panier")));
    }, [])

    useEffect(() => {
        //write
        if(panier.length !== 0 || init) localStorage.setItem("panier", JSON.stringify([...panier]));
        setInit(true);
    }, [panier])

    console.log(panierVisible)

    const handleSubmit = async (reservation : Reservation) => {
        try {
          let res = await fetch("http://localhost:8080/init/reservation", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservation)
          });
          let resJson = await res.json();
          console.log(resJson);
          if (res.status === 200) {
            console.log("success : reservation")
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
    };

    const reserveAndClear = () => {
        panier?.forEach(
            ticket => handleSubmit(ticketToReservation(ticket))
        )

        return [];
    }

    const ticketToReservation = (ticket : Ticket) : Reservation => {
        return {
            state : false,
            userId : userConnect.userId,
            date : ticket.date.toString(),
            idCinema : ticket.film.cinema.id,
            filmName : ticket.film.name,
            filmLink : ticket.film.img
        }
    }

    const removePanier = (ticket : Ticket) => {
        return panier?.filter((element : Ticket) => element !== ticket)
    }

    const line = (ticket : Ticket) => {
        return (
            <div>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}} >{ticket.film.name}</Text>
                <Text color="primary">Quantity : {ticket.count}</Text>
                <Text color="primary">Price : {ticket.price}</Text>
                <Button onClick={(e) => setPanier(removePanier(ticket))}>Cancel</Button>
            </div>
        )
    }

    console.log(panier)

    return (
        <Modal open={panierVisible} onClose={(e) => setPanierVisible(false)}>
            <Modal.Header>
                <Text css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Panier</Text>
            </Modal.Header>
            <Modal.Body>
                {panier?.length !== 0 ? panier?.map((ticket : Ticket) => line(ticket)) : ""}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => {setPanier(reserveAndClear())}}>Pay</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Panier;