import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./Car.css"

function Cars() {

  const [cars, setCars] = useState([]);
   const [page, setPage] = useState(1);

  useEffect(() => {
     axios.get("https://car-selling-website-m2sn.onrender.com/cars/")
        .then((res) => {
        setCars(res.data.results);
      });
  }, [page]);

  return (
  <div className="main">
<div className="hero-content">

    <h1>Drive Your Dream Car Today</h1>

    <p>
        Buy, Sell & Explore Premium Cars at the Best Prices.
        Trusted by Thousands of Happy Customers Across India.
    </p>

    <div className="hero-btns">
        <button className="btn1">Explore Cars</button>
        <button className="btn2">Sell Your Car</button>
    </div>
    <section className="features">
    <div className="feature">
        <h2>5000+</h2>
        <p>Cars Sold</p>
    </div>

    <div className="feature">
        <h2>3000+</h2>
        <p>Happy Customers</p>
    </div>

    <div className="feature">
        <h2>100+</h2>
        <p>Dealers</p>
    </div>

    <div className="feature">
        <h2>24/7</h2>
        <p>Support</p>
    </div>
</section>
</div>
 <h2 className="section-title">
   🚗 Featured Premium Cars
</h2>
    <div className="super">
      {cars.map((car) => (
  <Link
    key={car.id}
    to={`/card/${car.id}`}
    className="text-decoration-none"
  >
   <div className="demo">
  <span className="new-badge">NEW</span>

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

</div>
);

}

export default Cars;