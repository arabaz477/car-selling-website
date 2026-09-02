import axios from "axios";
import {Link} from "react-router-dom"

function Details({Cars}){

  return (
      <>
      {Cars.map((car)=>(
          <div key={car.id}>
    <Link to={`/Cars/${car.id}`}>
      <div className="project">
        <img src={car.car_images} alt={card.car_name} />
        <h4>{car.car_name}</h4>
          </div>
           </Link>
           </div>
))}
</>
    )
}

export default Details;