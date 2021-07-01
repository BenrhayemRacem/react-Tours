import React, {useEffect, useState} from "react";
import Tours from "./Tours";
import Loading from "./Loading";


const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours , setTours] = useState([]);
  const [loading , setLoading] = useState(true);

const fetchTours = async () => {
  setLoading(true);
  try {

    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);


  }
  catch (error) {
    setLoading(false);
    console.error(error);
  }

}
  const removeTours = (id)=> {
    const newTours = tours.filter((tour)=> tour.id !==id) ;
    setTours(newTours);
  }


  useEffect(()=> {
    fetchTours() ;
  } , [])


if (loading) {
  return (
      <Loading/>
  )
}
if (tours.length===0) {
  return  (
      <div>
        <h2> No Tours Left</h2>
        <button onClick={()=>fetchTours()}> show all tours </button>
      </div>
  )
}

return  (
    <Tours tours={tours} removeTours={removeTours}/>
)





}




export default App;
