import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Cine } from "../../Interfaces/cine"
//import { cinemaList } from "./Cinemalist";
import './cinema.css'
// import pic from "../../assets/react.svg"
// import ugcLogo from "../../assets/UGC.png"
// import patheLogo from "../../assets/gaumont-pathe.png"
// import megaramaLogo from "../../assets/megarama.png"

// const cinemaList: Cine[] = [
//     {name : "UGC Ciné", img : "ugcLogo"},
//     {name : "Gaumont Pathé", img : "gaumont-pathé"},
//     {name : "Mégarama", img : "megarama"}
// ]
// const cinemaList= [
//     {name : "UGC Ciné", img : ugcLogo},
//     {name : "Gaumont Pathé", img : patheLogo},
//     {name : "Mégarama", img : megaramaLogo}
// ]

const Cinema = () =>{
    const [cinemaList, setCinemaList]=useState<Cine[]>([]);
    useEffect(()=>{
        fetch("http://localhost:8080/init/findAllCinoche")
        .then(res=>res.json())
        .then(resJson=>setCinemaList(resJson))
    }, [])
    const CinemaDisplay = cinemaList.map(elt=>
        <li key={elt.id} className="cinema">
            <Link to={"/cinema/"+elt.id} className="link">
                <img style={{  borderRadius: '10%'}} src={elt.url} alt={elt.name+" cinéma"} />
                <div>{elt.name}</div>
            </Link>
        </li>
        );
    return(
        <div>
            <div> Nos différents parténarits Cinémas</div>
            <div className="display-cinema-places">
                {CinemaDisplay}
            </div>
            {/* <div className="display-cinema-places">
                {CinemaDisplay}
            </div>
            <div className="display-cinema-places">
                {CinemaDisplay}
            </div>
            <div className="display-cinema-places">
                {CinemaDisplay}
            </div> */}
        </div>
        
    )
}
export default Cinema