import {Button, Container} from "react-bootstrap";
import React from "react";


const noToursLeft = (props) => {
    const handleClick = props.handleClick ;
    return (
        <Container>
            <h2> No Tours Left</h2>
            <Button  className="btn-block align-content-center btn-danger" onClick={handleClick}> show all tours </Button>
        </Container>
    )
};

export default noToursLeft;
