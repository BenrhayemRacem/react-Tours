import React, {useState} from "react";

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
                <h1>{name}</h1>
            </div>
            <img src={image} alt={name}/>
            <div>
                <p>
                    {handleReadMore()} <button onClick={()=>setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </button>
                </p>

            </div>
            <div>
                {price}
            </div>

            <button onClick={()=>removeTours(id)}> not interested</button>

        </article>


    )
}
export default Tour ;