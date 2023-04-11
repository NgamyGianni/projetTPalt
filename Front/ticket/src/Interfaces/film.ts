import { Cine } from "./cine";

export interface Film{
    cinema : Cine,
    name: string,
    img: string,
    description: string,
    nb_place: number,
    available_place: number,
    date: string
}