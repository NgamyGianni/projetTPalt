import { Film } from "./film"

export interface Ticket {
    "film" : Film,
    "count" : number,
    "price" : number
}