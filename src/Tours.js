
import React from "react";
import Tour from "./Tour" ;

const Tours = (props) => {

    const tours = props.tours;

    return (
        tours.map((tour)=>{
            return(
                <div>
                    <Tour key={tour.id}  tour={tour} removeTours={props.removeTours}/>

                </div>

            )

        })
    )

};
export default Tours;