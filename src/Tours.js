
import React from "react";
import Tour from "./Tour" ;
import {Container} from "react-bootstrap";

const Tours = (props) => {

    const tours = props.tours;

    return (
        tours.map((tour)=>{
            return(
                <Container>
                    <Tour key={tour.id}  tour={tour} removeTours={props.removeTours}/>

                </Container>

            )

        })
    )

};
export default Tours;