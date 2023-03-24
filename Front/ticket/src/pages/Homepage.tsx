import Cinema from "../components/cinema/Cinema";
import { Button } from "@nextui-org/react";

const Homepage = () => {
    return(
        <div>
            <div> les films du jour </div>
            <Cinema />
        </div>
    )
}

export default Homepage;