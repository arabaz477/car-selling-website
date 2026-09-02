import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./List.css";

function Car_listing() {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [open, setOpen] = useState(false);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/cars/")
      .then((res) => {
        setCars(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const brands = [...new Set(cars.map((car) => car.car_name))];

  const filteredCars =
    brand === ""
      ? cars
      : cars.filter((car) => car.car_name === brand);

  return (
<div className="jack">
  {cars.map((car) => (
    <div className="tom" key={car.id}>
      <span className="badge">New</span>

      <img src={car.car_images} alt="" />

      <h3>{car.car_name}</h3>

      <p>⚡ {car.car_speed}</p>
      <p>🎨 {car.car_color}</p>

      <div className="price">
        ₹ {car.car_price}
      </div>

      <button className="view-btn">
        View Details
      </button>

<span className="badge">New</span>

      <img src={car.car_images1} alt="" />

      <h3>{car.car_name}</h3>

      <p>⚡ {car.car_speed}</p>
      <p>🎨 {car.car_color}</p>

      <div className="price">
        ₹ {car.car_price}
      </div>
<Link to="cart">
      <button className="view-btn">
        View Details
      </button>
      </Link>
      <span className="badge">New</span>

      <img src={car.car_image2} alt="" />

      <h3>{car.car_name}</h3>

      <p>⚡ {car.car_speed}</p>
      <p>🎨 {car.car_color}</p>

      <div className="price">
        ₹ {car.car_price}
      </div>

      <button className="view-btn">
        View Details
      </button>

    </div>
  ))}
</div>
  );
}

export default Car_listing;