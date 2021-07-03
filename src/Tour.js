import React, {useState} from "react";
import {Button, Col,  Image, Row} from "react-bootstrap";


const Tour =(props) => {
    const {id,name , info,image , price} = props.tour ;
    const removeTours = props.removeTours ;
    const [readMore,setReadMore] = useState(false);
    const handleReadMore = ()=> {
        if ( ! readMore) {
            const infoMinimized = `${info.substring(0,150)} ...` ;
            return infoMinimized ;
        }
        return info ;
    }

    return (

            <article >
            <div>
                <h2>{name}</h2>
            </div>

            <Image src={image}  thumbnail />

                    <Row >
            <Col xs={9}>
                <p>
                    {handleReadMore()} <Button  variant="outline-info" onClick={()=>setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </Button>
                </p>

            </Col>
            <Col className="d-flex justify-content-center" >
               <h3> ${price} </h3>
            </Col>
                    </Row>
                    <Row >
                        <Col xs={11}>
                    <Button className=" btn-danger btn-block" onClick={()=>removeTours(id)}> not interested</Button>
                        </Col>
                    </Row>



            </article>





    )
}
export default Tour ;