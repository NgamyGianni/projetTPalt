import { useState } from "react"
import { Link } from "react-router-dom"
import { cinemaList } from "./Cinemalist";
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
    const CinemaDisplay = cinemaList.map(elt=>
        <li key={elt.name} className="cinema">
            <Link to="/" className="link">
                <img  src={elt.img} alt={elt.name+" cinéma"} />
                <div>{elt.name}</div>
            </Link>
        </li>
        );
    return(
        // <button /*onClick={}*/>
            
            
        //     <div>Les Cinémas</div>
        // </button>
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