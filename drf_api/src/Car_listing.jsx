import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./List.css";

function Car_listing() {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    axios
      .get("https://car-selling-website-m2sn.onrender.com/cars/")
      .then((res) => {
        console.log(res.data);
        setCars(res.data.results || []);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  const brands = [...new Set(cars.map((car) => car.car_name))];

  const filteredCars =
    brand === ""
      ? cars
      : cars.filter((car) => car.car_name === brand);

  return (
    <div className="container mt-4">

      <div className="mb-4">
        <select
          className="form-select"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="jack">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div className="tom" key={car.id}>
              <span className="badge">New</span>

              <img
                src={`https://car-selling-website-m2sn.onrender.com${car.car_images}`}
                alt={car.car_name}
                className="img-fluid"
              />

              <h3>{car.car_name}</h3>

              <p>⚡ Speed : {car.car_speed}</p>
              <p>🎨 Color : {car.car_color}</p>

              <div className="price">
                ₹ {car.car_price}
              </div>

              <Link to={`/Card/${car.id}/`}>
                <button className="view-btn">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <h3>No Cars Found</h3>
        )}
      </div>
    </div>
  );
}

export default Car_listing;