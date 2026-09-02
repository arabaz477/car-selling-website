import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./Car.css"

function Cars() {

  const [cars, setCars] = useState([]);
   const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/cars/?page=${page}`)
        .then((res) => {
        setCars(res.data.results);
      });
  }, [page]);

  return (
  <div className="main">
<h3><marquee>⚜️♻️....Featured_Car....♻️⚜️</marquee></h3>
  <p>car details</p>
    <div className="super">
      {cars.map((car) => (
  <Link
    key={car.id}
    to={`/card/${car.id}`}
    className="text-decoration-none"
  >
    <div className="demo">
      <img
        src={car.car_images}
        alt={car.car_name}
      />

      <div className="card-content">
        <h4>{car.car_name}</h4>
        <p>💰 ₹{car.car_price}</p>
        <p>⚡ Speed: {car.car_speed}</p>
      </div>
    </div>
  </Link>
))}
    </div>
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span>Page{page}</span>

      <button
      disabled={page === 3}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
         <div className="Car_log">
<Link to="/Car_listing" className="logo">
<img src="https://img2.cgtrader.com/items/861042/6674934176/mahindra-car-logo-keychain-3d-model-3d-model-max-obj-fbx-mtl-tga.jpg"/>
</Link>

<Link to="/Car_listing" className="logo">
<img src="https://i.pinimg.com/originals/ad/f6/1a/adf61a22a4258349861fa00a7420593c.jpg"/>
</Link>

<Link to="/Car_listing" className="logo">
<img src="https://logos-world.net/wp-content/uploads/2021/10/Tata-Symbol.png"/>
</Link>

<Link to="/Car_listing" className="logo">
<img src="https://i.pinimg.com/originals/fe/70/6f/fe706fd0fb1c4ec175559bbb13bf19ba.jpg"/>
</Link>

<Link to="/Car_listing" className="logo">
<img src="https://tse1.mm.bing.net/th/id/OIP.04wBQvJ15D6EXKPeKkkahwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
</Link>

<Link to="/Car_listing" className="logo">
<img src="https://car-brand-names.com/wp-content/uploads/2016/03/Suzuki-emblem-4-768x768.jpg"/>
</Link>
</div>
</div>
);

}

export default Cars;