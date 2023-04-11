import Cinema from "../components/cinema/Cinema";
import { Button } from "@nextui-org/react";

const Homepage = () => {
    return(
        <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,46,161,1) 82%, rgba(0,91,110,1) 100%)' }}>
            <div>les films du jour</div>
            <Cinema />
        </div>
    )
}

export default Homepage;